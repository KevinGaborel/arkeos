const ArticleModel = require("../models/articleModel");
const ArticleViewModel = require("../models/articleViewModel");
const CommentModel = require("../models/commentModel");
const RatingArticleModel = require("../models/ratingArticleModel");

exports.getAllArticles = async (request, response, next) => {
  try {
    const data = request.query;

    console.log(data);

    let options = {};

    //todoo reste a coder le traitement de plusieurs categories
    if (data.category !== undefined && data.category !== "false") {
      console.log("coucou");
      options.category = data.category;
    }

    //todoo reste a coder le traitement de plusieurs themes
    if (data.theme !== undefined && data.theme !== "false") {
      options.theme = data.theme;
    }
    if (
      data.date !== undefined &&
      data.date !== "false" &&
      (data.rating === undefined || data.rating === "false")
    ) {
      options.orderByFields = '"created_at"';
      options.order = data.date;
    }
    if (
      data.rating !== undefined &&
      data.rating !== "false" &&
      (data.date === undefined || data.date === "false")
    ) {
      options.orderByFields = '"rating"';
      options.order = data.rating;
    }

    if (data.search !== undefined) {
      options.search = data.search;
    }

    if (
      (data.rating === "false" && data.date === "false") ||
      (data.rating === undefined && data.date === undefined)
    ) {
      options.orderByFields = '"created_at"';
      options.order = data.date;
    }

    // nombre d'article à afficher pour le moment
    options.nbArticles = 20;

    console.log("c'est les options", options);

    let articles;

    if (options.order === "DESC") {
      articles = await ArticleViewModel.findDesc(options);
    } else {
      articles = await ArticleViewModel.findAsc(options);
    }

    if (!articles) {
      return next();
    }

    for (const article of articles) {
      const content = article.dataValues.content.split(" ");
      content.length = 40;
      result = content.join(" ");
      console.log(result);
      article.dataValues.content = result;
    }

    response.json(articles);
  } catch (error) {
    console.trace(error);
    response
      .status(500)
      .json({ error: `Server error, please contact an administrator` });
  }
};

exports.showArticle = async (request, response, next) => {
  try {
    const id = parseInt(request.params.id, 10);

    const article = await ArticleViewModel.showArticle(id);

    if (!article) {
      return next();
    }

    response.json(article);
  } catch (error) {
    console.trace(error);
    response
      .status(500)
      .json({ error: `Server error, please contact an administrator` });
  }
};

exports.addArticle = async (request, response, next) => {
  try {
    //todoo ajouter de la sécurité

    const data = request.body;
    // Il me faut l'auteur, le titre de l'article, le contenu, le thème et ou catégorie

    /*
        data.title 
        data.content 
        data.category_id 
        data.theme_id
        data.url_picture
        */

    data.data.author_id = request.user;

    console.log(data);

    const article = await ArticleModel.addArticle(data.data);

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

exports.deleteArticle = async (request, response, next) => {
  try {
    //todoo ajouter de la sécurité

    const id_article = parseInt(request.params.id, 10);

    // Il me faut l'auteur, et l'id de l'article
    // si c'est l'auteur qui demande la suppression alors ok, sinon non

    const articleCurrent = await ArticleModel.findByPk(id_article);

    if (articleCurrent.dataValues.author_id !== request.user) {
      return next();
    }

    const article = await ArticleModel.delete(id_article);

    response.status(200).json({ article });
  } catch (error) {
    console.trace(error);
    response
      .status(500)
      .json({ error: `Server error, please contact an administrator` });
  }
};

exports.updateArticle = async (request, response, next) => {
  try {
    //todoo ajouter de la sécurité

    const id_article = parseInt(request.params.id, 10);

    // Il me faut l'auteur, et l'id de l'article
    // si c'est l'auteur qui demande la modification alors ok, sinon non

    const articleCurrent = await ArticleModel.findByPk(id_article);

    if (articleCurrent.dataValues.author_id !== request.user) {
      return next();
    }

    const newValue = request.body;

    console.log("les données front", newValue);

    for (const data in articleCurrent.dataValues) {
      if (articleCurrent.dataValues[data]) {
        if (!newValue[data]) {
          newValue[data] = articleCurrent.dataValues[data];
        }
      }
    }

    newValue.data.id = id_article;
    const article = await ArticleModel.updateArticle(newValue.data);

    response.status(200).json({ article });
  } catch (error) {
    console.trace(error);
    response
      .status(500)
      .json({ error: `Server error, please contact an administrator` });
  }
};

exports.addRating = async (request, response, next) => {
  try {
    //todoo ajouter de la sécurité

    const data = {};
    data.id_article = parseInt(request.params.id, 10);
    data.id_user = request.user;
    console.log(request.user);
    if (!request.user) {
      return `Not connected`;
    }

    const rate = await RatingArticleModel.findRating(data);
    console.log(rate);
    if (rate) {
      const deleteLike = await RatingArticleModel.deleteRating(data);
      console.log(deleteLike);
      return deleteLike;
    }
    data.rating = 1;
    const rating = await RatingArticleModel.addRaiting(data);

    response.status(200).json({ rating });
  } catch (error) {
    console.trace(error);
    response
      .status(500)
      .json({ error: `Server error, please contact an administrator` });
  }
};

exports.addComment = async (request, response, next) => {
  try {
    //todoo ajouter de la sécurité

    if (!request.user) {
      return `Not connected`;
    }

    const data = {};
    data.article_id = parseInt(request.params.id, 10);
    data.author_id = request.user;
    data.content = request.body.content;

    console.log(data);

    const comment = await CommentModel.addComment(data);

    response.status(200).json({ comment });
  } catch (error) {
    console.trace(error);
    response
      .status(500)
      .json({ error: `Server error, please contact an administrator` });
  }
};
