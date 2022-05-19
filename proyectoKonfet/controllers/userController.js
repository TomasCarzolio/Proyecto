const data = require('../database/models');
const usuario = data.Usuario;

const controller = {
    profile: function (req, res) {
        res.render('profile', 
        {
            user: data.usuario,
            productos: data.productos,
        })
    },

    profileEdit: function (req, res) {
        res.render('profile-edit')
    },

}

module.exports = controller;
