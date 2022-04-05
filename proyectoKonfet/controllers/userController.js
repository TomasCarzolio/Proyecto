const data = require("../db/data");

const indexController = {
    header: function(req, res){
    res.render('header')
    }, 

    footer: function(req, res){
    res.render('footer')
    }, 

    profile: function(req, res){
        res.render('profile')
    }, 

    profileEdit: function(req, res){
        res.render('profile-edit')
    }, 
   

    
}

module.exports = (indexController);