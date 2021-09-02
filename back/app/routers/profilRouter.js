const express = require('express');
const router = express.Router();

const profilController = require('../controllers/profilController.js');


// middleware pour controller le token
const {authenticateToken} = require('../middlewares/members');

router.use(authenticateToken);

// affiche le profil
router.get('/', profilController.showProfil);


// modifie un membre
router.put('/', profilController.updateUser);


// supprime un membre
router.delete('/', profilController.deleteUser);


module.exports = router;