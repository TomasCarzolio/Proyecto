const data = require('../db/data');
const comentarios = data.comentarios;
const productos = data.productos;

const controller = {
    product: function (req, res) {
        productos.findAll()
        .then(function(productos){
       comentarios.findAll()
       .then(function(comentarios){
      res.render('product', 
        { comentarios: comentarios,
          productos: productos[req.params.product]})
                })
             })
        },
    productAdd: function (req, res) {
        res.render('product-add')
    }

}

module.exports = controller;

// index: function (req, res) {
//     producto.findAll()
//         .then(function(productos){
//             res.render("index", {productos : productos, })
//         });
//         comentarios.findAll()
//         .then(function(comentarios){
//             res.render("index", {comentarios : comentarios})
//         }
//         )},