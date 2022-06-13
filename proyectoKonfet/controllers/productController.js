const data = require('../database/models')
const producto = data.Producto;
const comentario = data.Comentario;

const controller = {
    product: function (req, res) {
        producto.findByPk(req.params.producto)
            .then(function (producto) {
                comentario.findAll({ where: { producto_id: req.params.producto } })
                    .then(function (comentarios) {
                        res.render('product', { producto, comentarios })
                    });
            })
            .catch(function (error) {
                res.send(error)
            })

    },

    productAdd: function (req, res) {
        if (!req.session.usuario) {
            res.redirect('/login');
        }
        res.render('product-add');
    },

    store: function (req, res) {
        req.body.usuario_id = req.session.usuario.id;
        if (req.file) req.body.foto = (req.file.path).replace('public', '');
        data.productos.create(req.body)
            .then(function () {
                res.redirect('/')
            })
            .catch(function (error) {
                res.send(error);
            })
    },

    edit: function (req, res) {
        producto.findByPk(req.params.id)
            .then(function (producto) {
                res.render('product-edit', { producto });
            })
            .catch(function (error) {
                res.send(error);
            })
    },

    update: function (req, res) {
        if (req.file) req.body.foto = (req.file.path).replace('public', '');
        producto.update(req.body, { where: { id: req.params.id } })
            .then(function () {
                res.redirect('/')
            })
            .catch(function (error) {
                res.send(error);
            })
    }
};

module.exports = controller;
