module.exports = function (sequelize, dataTypes) {
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        createdAt : { type: dataTypes.DATE },
        updatedAt : { type: dataTypes.DATE },
        artista: { type: dataTypes.STRING(100) },
        lugar: { type: dataTypes.STRING },
        fecha : { type: dataTypes.DATE },
        precio: { type: dataTypes.INTEGER },
        descripcion: { type: dataTypes.STRING(500) },
        entrada: { type: dataTypes.STRING },
        numeroEntradas: { type: dataTypes.INTEGER },
        usuario_id : { type: dataTypes.INTEGER }
    }
    const configs = {
        tableName: 'productos',
        timestamps: true
    }
    
    const Producto = sequelize.define('Producto', cols, configs);

    Producto.associate = function(modelos) {
        Producto.belongsTo(modelos.Usuario, {
            as: "usuario",
            foreignKey: "usuario_id"
        })

        Producto.hasMany(modelos.Comentario, {
            as : "comentarios",
            foreignKey: "producto_id"
        })
    }
    return Producto;
}