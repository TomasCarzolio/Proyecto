const data = require("../db/data");

const indexController = {
    profile: function(req, res){
        res.render('profile')
    }, 

    profileEdit: function(req, res){
        res.render('profile-edit')
    }, 
   
}

module.exports = (indexController);
