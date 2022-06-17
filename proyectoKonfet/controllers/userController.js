const data = require('../database/models');
const usuario = data.Usuario;
const productos = data.Producto;

const controller = {

     myProfile: function (req, res) {
        usuario.findByPk(req.session.usuario.id, { include : [ { association: "productos" }, { association : "comentarios" }]})
            .then(function (usuario) {
                        res.render('profile', { usuario })
                    })
                    .catch(function (error) {
                        res.send(error);
                    });
    },
    profile: function(req, res) {
        usuario.findByPk(req.params.id, { include: [ { association: 'productos' } , { association : "comentarios" }] })
            .then(function (usuario) {
                res.render('profile', { usuario });
            })
            .catch(function (error) {
                res.send(error)
            });
    },

    profileEdit: function (req, res) {
        usuario.findByPk(req.session.usuario.id)
            .then(function (usuario) {
                res.render('profile-edit', usuario)
            })
            .catch(function (error) {
                res.send(error);
            })
    },

    profileUpdate: function (req, res) {
        if (req.file) req.body.fotoDePerfil = "/images/uploads/" + req.file.filename;
        usuario.update(req.body, { where: { usuario_id: req.params.id } })
            .then(function () {
                res.redirect('/')
            })
            .catch(function (error) {
                res.send(error);
            })
    },

};

module.exports = controller;
