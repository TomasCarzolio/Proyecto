const data = require("../db/data");

const userController = {
    profile: function(req, res){
        res.render('profile', { 
            user: data.usuario,
            productos: data.productos,
            
        })
    }, 

    profileEdit: function(req, res){
        res.render('profile-edit')
    }, 
   
}

module.exports = (userController);
