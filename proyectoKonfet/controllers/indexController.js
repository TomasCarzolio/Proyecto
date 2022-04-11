const data = require('../db/data')

const indexController = {
    index: function (req, res) {
        res.render('index',
            {
                productos: data.productos,
                comentarios: data.comentarios,
                usuario: data.usuario
            })
    },
    register: function (req, res) {
        res.render('register')
    },
    login: function (req, res) {
        res.render('login')
    },
    searchResults : function (req, res) {
        res.render('search-results')}

}

module.exports = indexController;
