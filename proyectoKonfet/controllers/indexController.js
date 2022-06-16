const data = require('../database/models')
const producto = data.Producto;
const comentario = data.Comentario;
const usuario = data.Usuario;
const hasher = require('bcryptjs')
const op = data.Sequelize.Op;


const controller = {
    index: function (req, res) {
        producto.findAll(
            {   include: {all: true, nested: false}, 
                order: [['id', 'DESC']]
        })
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
        if (req.body.contrasenia.length < 3) { throw Error('La contraseña es demasiada corta.') }

        if (req.file) req.body.fotoDePerfil = "/images/uploads/" + req.file.filename;
        
        req.body.contrasenia = hasher.hashSync(req.body.contrasenia, 10);
        usuario.create(req.body)
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

    access: function (req, res, next) {
        usuario.findOne({ where: { email: req.body.email } })
            .then(function(usuario){
                if (!usuario) throw Error('Nombre de usuario incorrecto.')
                if (hasher.compareSync(req.body.contrasenia, usuario.contrasenia)) {
                    req.session.usuario = usuario;
                    if (req.body.recordame) {
                        // Guardo del lado del cliente 
                        res.cookie('usuarioId', usuario.id, {maxAge : 1000 * 60 *60 * 7})
                    }
                    res.redirect('/')
                }
                else {
                    throw Error('Contraseña incorrecta')
                }
            })
            .catch(function (error) {
                res.render('login', { error })
            })
    },

    logout: function (req, res) {
        req.session.usuario = null;
        res.clearCookie('usuarioId');
        res.redirect('/')
    },

    searchResults: function(req, res) {
        producto.findAll({ 
            where: {
                [op.or]: [
                    { artista: { [op.like]: "%"+req.query.search+"%"} },
                    { lugar: { [op.like]: "%"+req.query.search+"%"} },
                    { fecha: { [op.like]: "%"+req.query.search+"%"} },
                    { descripcion: { [op.like]: "%"+req.query.search+"%"} }
                ]
            },
            include: [ { association: 'usuario' } ] 
        }).then(function (productos) {
                res.render('search-results', { productos });
            })
            .catch(function (error) {
                res.send(error)
            });
    }
}

module.exports = controller;
