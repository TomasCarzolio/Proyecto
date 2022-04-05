const data = require('../db/data')

const productController = {
    product : function (req, res) {
        res.render('product')
    },
    productAdd : function (req, res) {
        res.render('product-add')
    },
    
    headerLogueado: function(req, res){
        res.render('headerLogueado')
        }, 
    
}

module.exports = productController;