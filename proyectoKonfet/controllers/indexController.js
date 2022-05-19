const data = require('../database/models')
const producto = data.Producto;

const controller = {
    index: function (req, res) {
        res.render('index',
            {
                productos: data.productos,
                comentarios: data.comentarios,
            })
    },
    register: function (req, res) {
        res.render('register')
    },
    login: function (req, res) {
        res.render('login')
    },
    searchResults: function (req, res) {
        res.render('search-results')
    }

}

module.exports = controller;
