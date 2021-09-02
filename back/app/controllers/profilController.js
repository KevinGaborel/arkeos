const UserModel = require("../models/userModel");
const UserViewModel = require("../models/userViewModel");

exports.showProfil = async (request, response, next) => {
  try {

    profil_id = request.user;

    const member = await UserViewModel.findByPk(profil_id);

    if (member) {
      member.dataValues.password = "C'est secret, faut demander au back :p";
    }

    response.json(member);

  } catch (error) {
    console.trace(error);
    response
      .status(500)
      .json({ error: `Server error, please contact an administrator` });
  }
};

exports.updateUser = async (request, response, next) => {
    try {
        //todoo ajouter de la sécurité
  
        const newValue = request.body.data;

        /*
          newValue.email 
          newValue.city 
          newValue.country 
          newValue.presentation
          newValue.profile_picture
                  +
          request.user qui correspond à l'id du profil à modifier
        */

        const member = await UserViewModel.findByPk(request.user);

        for (const data in member.dataValues){
          if (member.dataValues[data]) {
            if (!newValue[data]) {
              newValue[data] = member.dataValues[data];
            }
          }
        }
        
        newValue.id = request.user;


        const user = await UserModel.updateUser(newValue);

  
        response.status(200).json({user});
  
    } catch (error) {
        console.trace(error);
        response.status(500).json({ error: `Server error, please contact an administrator` });
    }
  };
  
  exports.deleteUser = async (request, response, next) => {
    try {
        //todoo ajouter de la sécurité
        const id_user = request.user;
  
        const user = await UserModel.delete(id_user);
        
        
        response.status(200).json({user});
  
    } catch (error) {
        console.trace(error);
        response.status(500).json({ error: `Server error, please contact an administrator` });
    }
  };