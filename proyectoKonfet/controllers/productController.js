const { usuario } = require('../db/data');
const data = require('../db/data')

const productController = {
    product : function (req, res) {
        res.render('product', {
            user: data.usuario,
            comentarios: data.comentarios,
            productos: data.productos,
        })
    },
    productAdd : function (req, res) {
        res.render('product-add')
    }
    
}

module.exports = productController;