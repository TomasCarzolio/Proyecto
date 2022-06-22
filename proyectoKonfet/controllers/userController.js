const data = require('../database/models');
const usuario = data.Usuario;
const hasher = require('bcryptjs')

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
        usuario.findByPk(req.params.profile, { include: [ { association: 'productos' } , { association : "comentarios" }] })
            .then(function (usuario) {
                res.render('profile', { usuario});
            })
            .catch(function (error) {
                res.send(error)
            });
    },
   
    profileEdit: function (req, res) {
        usuario.findByPk(req.session.usuario.id)
            .then(function (usuario) {
                res.render('profile-edit', { usuario} );
            })
            .catch(function (error) {
                res.send(error);
            })
    },
 
    profileUpdate: function (req, res) {
        if (req.body.contrasenia.length > 1 && req.body.contrasenia.length < 3) { throw Error('La contraseña es demasiada corta.') }

        if (req.file) req.body.fotoDePerfil = "/images/uploads/" + req.file.filename;

        if ( req.body.contrasenia.length == 0) { req.body.contrasenia = req.session.usuario.contrasenia }

        req.body.contrasenia = hasher.hashSync(req.body.contrasenia, 10);
        
        usuario.update(req.body, { where: { id: req.session.usuario.id } })
            .then(function () {
                res.redirect('/')
            })
            .catch(function (error) {
                res.send(error);
            })
    },

};

module.exports = controller;
