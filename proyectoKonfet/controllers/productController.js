const data = require('../database/models')
const productos = data.Producto;
const comentarios = data.Comentario;

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
        }) 

    .catch(function(error){
        res.send(error)
    })
},

    store: function(req, res) {
        req.body.usuario_id = req.session.usuario.id;
        if (req.file) req.body.cover = (req.file.path).replace('public', '');
        data.productos.create(req.body)
            .then(function() {
                res.redirect('/')
            })
            .catch(function(error) {
                res.send(error);
            })
    }};

module.exports = controller;
