module.exports = function (sequelize, dataTypes) {
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombreUsuario: { type: dataTypes.STRING(100) },
        email: { type: dataTypes.STRING },
        fotoDePerfil: { type: dataTypes.STRING },
        dni: { type: dataTypes.INTEGER },
        contrasenia : { type : dataTypes.STRING},
        creado : { type: dataTypes.DATE },
        actualizado : { type: dataTypes.DATE }
    }


    const configs = {
        tableName: 'usuarios',
        timestamps: true
    }

    const Usuario = sequelize.define('Usuario', cols, configs);
    
    Usuario.associate = function(modelos){
        Usuario.hasMany(modelos.Producto , {
            as: "productos",
            foreignKey: "usuario_id"
        });

        Usuario.hasMany(modelos.Comentario, {
            as : "comentarios",
            foreignKey: "usuario_id"
        })
    };
    return Usuario;
}