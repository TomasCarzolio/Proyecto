module.exports = function (sequelize, dataTypes) {
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombreUsuario: { type: dataTypes.STRING(100) },
        nombre: { type: dataTypes.STRING },
        email: { type: dataTypes.STRING },
        fotoDePerfil: { type: dataTypes.STRING },
        fechaDeNac: { type: dataTypes.DATE },
        dni: { type: dataTypes.INTEGER }
    }
    const configs = {
        tableName: 'usuarios',
        timestamps: false
    }
    const Usuario = sequelize.define('Usuario', cols, configs);
    return Usuario;
}