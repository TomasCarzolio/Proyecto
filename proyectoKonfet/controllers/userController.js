const data = require('../database/models');
const usuario = data.Usuario;
const productos = data.Producto;

const controller = {
    profile: function (req, res) {
        usuario.findAll()
            .then(function (usuarios) {
                productos.findAll()
                    .then(function (productos) {
                        res.render('profile',
                            {
                                usuarios: usuarios,
                                productos: productos,
                            })
                    })
            })
    },

    profileEdit: function (req, res) {
        usuario.findByPk()
            .then(function (usuario) {
                res.render('profile-edit', usuario)
            })
            .catch(function (error) {
                res.send(error);
            })
    },

    profileUpdate: function (req, res) {
        if (req.file) req.body.fotoDePerfil = (req.file.path).replace('public', '');
        data.usuario.update(req.body, { where: { usuario_id: req.params.id } })
            .then(function () {
                res.redirect('/')
            })
            .catch(function (error) {
                res.send(error);
            })
    },

};

module.exports = controller;
