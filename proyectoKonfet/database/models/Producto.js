module.exports = function (sequelize, dataTypes) {
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        creado : { type: dataTypes.DATE },
        actualizado : { type: dataTypes.DATE },
        artista: { type: dataTypes.STRING(100) },
        fecha : { type: dataTypes.DATE },
        precio: { type: dataTypes.INTEGER },
        descripcion: { type: dataTypes.STRING(500) },
        foto: { type: dataTypes.STRING },
        entrada: { type: dataTypes.STRING },
        numeroEntradas: { type: dataTypes.INTEGER },
        usuario_id : { type: dataTypes.INTEGER }
    }
    const configs = {
        tableName: 'productos',
        timestamps: false
    }
    
    const Producto = sequelize.define('Producto', cols, configs);

    Producto.associate = function(modelos) {
        Producto.belongsTo(modelos.Usuario, {
            as : "usuarios",
            foreingnKey : "usuario_id",

        })

        Producto.hasMany(modelos.Comentario, {
            as : "comentario",
            foreingnKey : "producto_id"
        })
    }
    return Producto;
}