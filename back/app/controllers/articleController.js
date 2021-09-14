const ArticleModel = require("../models/articleModel");
const ArticleViewModel = require("../models/articleViewModel");
const CommentModel = require("../models/commentModel");
const RatingArticleModel = require("../models/ratingArticleModel");

const { getOptionsSearch } = require('../utils');

exports.getAllArticles = async (request, response, next) => {
  try {
    const data = request.query;

    let options = getOptionsSearch(data);

    const articles = await ArticleViewModel.find(options);

    if (!articles) {
      return next();
    }

    for (const article of articles.articles) {
      let content = article.content.split(" ");
      content.length = 40;
      content[40] = '...';
      content = content.join(" ");
      article.content = content;
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

    const data = request.body.data;
    
    // Il me faut l'auteur, le titre de l'article, le contenu, le thème et ou catégorie

    /*
        data.title 
        data.content 
        data.category_id 
        data.theme_id
        data.url_picture
        */

    data.author_id = request.user;


    const article = await ArticleModel.addArticle(data);

    if (!article) {
      return error;
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
