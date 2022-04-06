const data = require('../db/data')

const indexController = {
    index : function (req, res) {
        res.render('index')
    },
    register : function (req, res) {
        res.render('register')
    },
    login : function (req, res) {
        res.render('login')
    },
 
    headerLogueado: function(req, res){
        res.render('headerLogueado')
        }, 
    
}

module.exports = indexController;
