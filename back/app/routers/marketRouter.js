const express = require('express');
const router = express.Router();

const marketplaceController = require('../controllers/marketplaceController');


// middleware pour controller le token
const {authenticateToken} = require('../middlewares/members');


// affiche les articles classé par nouveauté par défaut dans le marketplace
router.get('/', marketplaceController.getAllMarket);


// après il faut être connecté pour avoir accès
router.use(authenticateToken);

// affiche un article du marketplace
router.get('/:id', marketplaceController.showMarket);

// ajoute un article dans la marketplace
router.post('/', marketplaceController.addMarket);

// supprime un article du marketplace
router.delete('/:id', marketplaceController.deleteMarket);

// modifie un article du marketplace
router.put('/:id', marketplaceController.updateMarket);


module.exports = router;