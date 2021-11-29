const express = require('express');
const router = express.Router();

const articleController = require('../controllers/articleController');

// middleware pour controller le token
const {authenticateToken} = require('../middlewares/members');


// affiche les articles classé par nouveauté par défaut
router.get('/', articleController.getAllArticles);

// affiche un article
router.get('/:id', articleController.showArticle);

// get all comment for a article
router.get('/:id/comment', articleController.getComment);

router.use(authenticateToken);


// vote +1 à un article
router.post('/:id/rating', articleController.addRating);

// add comment
router.post('/:id/comment', articleController.addComment);



// ajoute un article
router.post('/', articleController.addArticle);

// supprime un article
router.delete('/:id', articleController.deleteArticle);

// modifie un article
router.put('/:id', articleController.updateArticle);

module.exports = router;