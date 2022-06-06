const data = require('../database/models')
const producto = data.Producto;
const comentario = data.Comentario;
const usuario = data.Usuario;
const hasher = require('bcryptjs')


const controller = {
    index: function (req, res) {
        producto.findAll()
            .then(function (productos) {
                comentario.findAll()
                    .then(function (comentarios) {
                        res.render("index", {
                            productos: productos,
                            comentarios: comentarios
                        })
                    });
            })
            .catch(function (error) {
                res.send(error)
            });

    },
    register: function (req, res) {
        res.render('register');
    },

    store: function (req, res) {
        //if (!req.body.email) { throw Error('No se proporciona correo electrónico.') }
        const hashedContrasenia = hasher.hashSync(req.body.contrasenia, 10);
        usuario.create({
            nombreUsuario: req.body.nombreUsuario,
            contrasenia: hashedContrasenia,
            email: req.body.email,
        })
            .then(function () {
                res.redirect('/');
            })
            .catch(function (error) {
                res.send(error);
            })
    },

    login: function (req, res) {
        res.render('login')
    },

    access: function (req, res) {
        usuario.findOne({ where: { nombreUsuario: req.body.nombreUsuario } })
            .then(function(usuario){
                if (!usuario) throw Error('No se encuentra usuario.')
                if (hasher.compareSync(req.body.contrasenia, usuario.contrasenia)) {
                    req.session.usuario = usuario;
                    if (req.body.rememberme) {
                        // Guardo del lado del cliente 
                        res.cookie('usuarioId', usuario.id, {maxAge : 1000 * 60 *60 * 7})
                    }
                    res.redirect('/')
                }
                else {
                    throw Error('Credencial invalida')
                }
            })
            .catch(function (error) {
                res.send(error);
            })
    },

    logout: function (req, res) {
        req.session.usuario = null;
        res.clearCookie('usuarioId');
        res.redirect('/')
    },

    searchResults: function (req, res) {
        res.render('search-results')
    }

}

module.exports = controller;
