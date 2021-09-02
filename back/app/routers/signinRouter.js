const express = require('express');

const router = express.Router();


const userController = require('../controllers/userController');



// ajoute un membre
router.post('/', userController.addMember);


module.exports = router;