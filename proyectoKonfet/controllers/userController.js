const data = require("../db/data");

const userController = {
    profile: function(req, res){
        res.render('profile', { 
            user: data.usuario.nombreUsuario,
            email: data.usuario.email,
            fotoDePerfil: data.usuario.fotoDePerfil,
        })
    }, 

    profileEdit: function(req, res){
        res.render('profile-edit')
    }, 
   
}

module.exports = (userController);
