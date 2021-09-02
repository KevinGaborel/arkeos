const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');


// middleware pour controller le token
const {authenticateToken} = require('../middlewares/members');


router.use(authenticateToken);
// affiche les membres classé par nouveauté par défaut quand on est visiteur
router.get('/', userController.showAllMembers);

// recherche un ou des membres, par ville ou username
router.get('/search', userController.searchMembers);

// affiche un membre
router.get('/:id', userController.showMember);

module.exports = router;