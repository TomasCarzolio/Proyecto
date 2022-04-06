const data = require("../db/data");

const indexController = {
    headerLogeado : function(req, res){
    res.render('headerLogeado')
    }, 

    profile: function(req, res){
        res.render('profile')
    }, 

    profileEdit: function(req, res){
        res.render('profile-edit')
    }, 
   
}

module.exports = (indexController);