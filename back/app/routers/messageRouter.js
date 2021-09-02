const express = require('express');

const router = express.Router();

const messageController = require('../controllers/messageController');


// middleware pour controller le token
const {authenticateToken} = require('../middlewares/members');

router.use(authenticateToken);

// affiche les messages d'une discussion
router.get('/:receiver', messageController.showMessages);

// envoie un message
router.post('/:receiver', messageController.addMessages);

// affiche les discussions
router.get('/', messageController.showDiscussion);

// supprime une discussion
router.delete('/:discussion', messageController.deleteDiscussion);

module.exports = router;