const data = require('../database/models');
const usuario = data.Usuario;
const productos = data.Producto;

const controller = {
    profile: function (req, res) {
        usuario.findAll()
        .then(function(usuario){
         productos.findAll()
         .then(function(productos){
        res.render('profile', 
        {
            usuario: usuario,
            productos: productos,
                 })
              })
           })
        },

    profileEdit: function (req, res) {
        usuario.findByPk()
        .then(function(usuario){
        res.render('profile-edit', usuario)
        })
      }        
    }
    ;

module.exports = controller;
