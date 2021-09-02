const express = require('express');

const router = express.Router();

const imageController = require('../controllers/imageController');

const multer = require('multer');

// Create multer object
const imageUpload = multer({
    dest: './app/img',
  });

// middleware pour controller le token
const {authenticateToken} = require('../middlewares/members');

//router.use(authenticateToken);

// affiche une image
router.get('/:filename', imageController.showImage);

// envoie une image
router.post('/', imageUpload.single('image'), imageController.addImage);


module.exports = router;