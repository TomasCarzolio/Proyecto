module.exports = function (sequelize, dataTypes) {
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
       usuario_id: { type: dataTypes.INTEGER },
        producto_id: { type: dataTypes.INTEGER }
    }

    const configs = {
        tableName: 'producto_usuario',
        timestamps: false
    }
    const ProductoUsuario = sequelize.define('ProductoUsuario', cols, configs);
    return ProductoUsuario;
}