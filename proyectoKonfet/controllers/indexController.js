const data = require('../db/data')

const indexController = {
    index: function (req, res) {
        res.render('index',
            { productos: data.productos },
            { comentario: data.comentarios },
            { usuario: data.usuario })
    },
    register: function (req, res) {
        res.render('register')
    },
    login: function (req, res) {
        res.render('login')
    },

}

module.exports = indexController;
