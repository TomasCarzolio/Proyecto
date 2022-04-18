const data = require('../db/data')

const controller = {
    product: function (req, res) {
        res.render('product', 
        {
            comentarios: data.comentarios,
            productos: data.productos[req.params.product],
        })
    },
    productAdd: function (req, res) {
        res.render('product-add')
    }

}

module.exports = controller;