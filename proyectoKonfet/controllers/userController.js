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
        usuario.findByPk(req.params.profile, { include: {all: true, nested: false} } ) 
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
        if (req.file) req.body.fotoDePerfil = "/images/uploads/" + req.file.filename;

        if ( req.body.contrasenia.length !== 0) { 

            if (req.body.contrasenia.length < 3) { throw Error('La contraseña es demasiada corta. Debe superar los 3 caracteres.') }
            
            req.body.contrasenia = hasher.hashSync(req.body.contrasenia, 10) 
        
        } 

        req.body.contrasenia = req.session.usuario.contrasenia; 

        usuario.update(req.body, { where: { id: req.session.usuario.id } })
            .then(function () {
                req.session.usuario.nombreUsuario = req.body.nombreUsuario;
                res.redirect('/users/me')
            })
            .catch(function (error) {
                res.send(error);
            })
    },

};

module.exports = controller;
