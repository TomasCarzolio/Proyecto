const data = require('../database/models')
const comentario = data.Producto;
const comentario = data.Comentario;

const controller = {
    product: function (req, res) {
        productos.findAll()
        .then(function(productos){
        comentarios.findAll()
        .then(function(comentarios){
            res.render('product', {productos: productos,comentarios: comentarios})
        });
   })

   .catch(function(error){
       res.send(error)
   })
    },
    productAdd: function (req, res) {
        this.product.findByPk()
        .then(function(product){
        res.render('product-add', product)    
        });  
    }
    .catch(function(error){
        res.send(error)
})};

module.exports = controller;
