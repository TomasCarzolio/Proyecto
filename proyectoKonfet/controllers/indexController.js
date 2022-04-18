const data = require('../db/data')

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
