const MarketplaceModel = require("../models/marketplaceModel");
const MarketplaceViewModel = require("../models/marketplaceViewModel");

exports.getAllMarket = async (request, response, next) => {
  try {
    const data = request.query;

    console.log(data);

    let options = {};

    //todoo reste a coder le traitement de plusieurs categories
    if (data.category !== undefined && data.category !== "false") {
      options.category = data.category;
    }

    if (data.date !== undefined && data.date !== "false") {
      options.orderByFields = '"created_at"';
      options.order = data.date;
    }

    if (data.search !== undefined) {
      options.search = data.search;
    }

    // nombre d'article à afficher pour le moment
    options.nbArticles = 20;

    let articles;
    console.log(options);
    console.log(data);
    if (options.order === "DESC") {
      articles = await MarketplaceViewModel.findDesc(options);
    } else {
      articles = await MarketplaceViewModel.findAsc(options);
    }

    if (!articles) {
      return next();
    }

    response.json(articles);
  } catch (error) {
    console.trace(error);
    response
      .status(500)
      .json({ error: `Server error, please contact an administrator` });
  }
};

exports.showMarket = async (request, response, next) => {
  try {
    const id = parseInt(request.params.id, 10);

    if (isNaN(id)) {
      return next();
    }

    const article = await MarketplaceViewModel.findByPk(id);

    if (!article) {
      return next();
    }
    //console.log(article);
    response.json(article);
  } catch (error) {
    console.trace(error);
    response
      .status(500)
      .json({ error: `Server error, please contact an administrator` });
  }
};

exports.addMarket = async (request, response, next) => {
  try {
    console.log("dans le addMarker");
    //todoo ajouter de la sécurité

    const data = request.body;
    // Il me faut l'auteur, le titre de l'article, le contenu, le(s) thème(s) et ou catégorie(s)
    console.log(data);
    /*
        data.scientific_name
        data.locality
        data.phase 
        data.born_captivity 
        data.price
        data.native_country
        data.birth_date
        data.content

   
        data.author_id
        data.category_id
        */

    data.author_id = request.user;

    const article = await MarketplaceModel.addMarket(data);

    if (!article) {
      return next();
    }

    response.status(200).json({ article });
  } catch (error) {
    console.trace(error);
    response
      .status(500)
      .json({ error: `Server error, please contact an administrator` });
  }
};

exports.updateMarket = async (request, response, next) => {
  try {
    //todoo ajouter de la sécurité

    const id_article = parseInt(request.params.id, 10);

    // Il me faut l'auteur, et l'id de l'article
    // si c'est l'auteur qui demande la modification alors ok, sinon non

    const currentArticle = await MarketplaceViewModel.findByPk(id_article);

    if (currentArticle.dataValues.author_id !== request.user) {
      return next();
    }

    const newValue = request.body;

    for (const data in currentArticle.dataValues) {
      if (currentArticle.dataValues[data]) {
        if (!newValue[data]) {
          newValue[data] = currentArticle.dataValues[data];
        }
      }
    }

    // je stock l'id de l'article
    newValue.data.id = id_article;

    const article = await MarketplaceModel.updateMarket(newValue.data);

    response.status(200).json(article);
  } catch (error) {
    console.trace(error);
    response
      .status(500)
      .json({ error: `Server error, please contact an administrator` });
  }
};

exports.deleteMarket = async (request, response, next) => {
  try {
    //todoo ajouter de la sécurité

    const id_article = parseInt(request.params.id, 10);

    const currentArticle = await MarketplaceViewModel.findByPk(id_article);

    if (currentArticle.dataValues.author_id !== request.user) {
      return next();
    }

    // Il me faut l'auteur, et l'id de l'article
    // si c'est l'auteur qui demande la suppression alors ok, sinon non

    const article = await MarketplaceModel.delete(id_article);

    response.status(200).json({ article });
  } catch (error) {
    console.trace(error);
    response
      .status(500)
      .json({ error: `Server error, please contact an administrator` });
  }
};
