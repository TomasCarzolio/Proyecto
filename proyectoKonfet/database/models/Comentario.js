module.exports = function (sequelize, dataTypes) {
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        creado : { type: dataTypes.DATE },
        contenido: { type: dataTypes.STRING },
        usuario_id: { type: dataTypes.INTEGER },
        producto_id: { type: dataTypes.INTEGER  }


    }

    const configs = {
        tableName: 'comentarios',
        timestamps: false
    }
    const Comentario = sequelize.define('Comentario', cols, configs);

    Comentario.associate = function(modelos) {
        Comentario.belongsTo(modelos.Usuario, {
            as: "usuario",
            foreignKey: "usuario_id"
        });
        Comentario.belongsTo(modelos.Producto, {
            as: "producto",
            foreignKey: "producto_id"
        })
    }

    return Comentario;
}