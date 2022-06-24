const data = require('../database/models')
const producto = data.Producto;
const comentario = data.Comentario;

const controller = {
    product: function (req, res) {
        producto.findByPk(req.params.producto, { include: { all: true, nested: true } })
            .then(function (producto) {
                comentario.findAll({ where: { producto_id: req.params.producto }, include: [{ association: 'usuario' }], order: [['id', 'DESC']] })
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
        if (!req.session.usuario) {
            return res.render('product-add', { error: 'No estás autorizado!' });
        }

        req.body.usuario_id = req.session.usuario.id;
        if (req.file) req.body.entrada = "/images/uploads/" + req.file.filename;
        producto.create(req.body)
            .then(function () {
                res.redirect('/')
            })
            .catch(function (error) {
                res.send(error);
            })
    },

    edit: function (req, res) {
        if (!req.session.usuario) {
            throw Error ('No estás autorizado!');
        } 

        producto.findByPk(req.params.id)
            .then(function (producto) {
                if (req.session.usuario.id !== producto.usuario_id){
                    throw new Error ('No puedes editar productos ajenos!')} 
                else { 
                        res.render('product-edit', { producto })
                    };
            })
            .catch(function (error) {
                res.send(error);
            })
    },

    update: function (req, res) {
        if (req.file) req.body.entrada = "/images/uploads/" + req.file.filename;;
        producto.update(req.body, { where: { id: req.params.id } })
            .then(function () {
                res.redirect('/')
            })
            .catch(function (error) {
                res.send(error);
            })
    },

    delete: function (req, res) {
        if (!req.session.usuario) {
            throw Error('No está autorizado!')
        }
        producto.destroy({ where: { id: req.params.id } })
            .then(function () {
                res.redirect('/')
            })
            .catch(function (error) {
                res.send(error);
            })
    },

    comment: function (req, res) {
        if (!req.session.usuario) {
            res.redirect('/login')
        }

        if (req.body.contenido.length <= 0) { throw new Error('No se pueden subir comentarios vacios!') }
        

        req.body.usuario_id = req.session.usuario.id;

        req.body.producto_id = req.params.id;

        comentario.create(req.body)

            .then(function () {
               
                res.redirect('/products/' + req.params.id)
                
            })
            .catch(function (error) {
                res.send(error);
            })
    },
};

module.exports = controller;
