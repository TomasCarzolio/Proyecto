const data = require('../database/models')
const producto = data.Producto;
const comentario = data.Comentario;

const controller = {
    product: function (req, res) {
        producto.findByPk(req.params.producto)
        .then(function(producto){
        comentario.findAll ({where: {producto_id: req.params.producto}})
        .then(function(comentarios){
            res.render('product', {producto, comentarios})
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
