const express = require('express');

const router = express.Router();

const loginController = require('../controllers/loginController');

// tentative de connexion
router.post('/', loginController.getConnected);


module.exports = router;