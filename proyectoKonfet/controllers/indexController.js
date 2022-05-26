const data = require('../db/models')
const comentarios = db.comentarios;

const controller = {
    index: function (req, res) {
        res.render('index',
            {
                productos: data.productos,
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
