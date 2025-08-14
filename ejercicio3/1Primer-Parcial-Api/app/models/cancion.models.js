
module.exports = (sequelize, Sequelize) => {

    const Cancion = sequelize.define("cancion", {
        nombre: {
            type: Sequelize.STRING
        },
        descripcion: {
            type: Sequelize.STRING
        },
        artista: {
            type: Sequelize.STRING
        },
        duracion: {
            type: Sequelize.INTEGER
        },
        
        extensionDeCancion: {
            type: Sequelize.STRING
        },
        album:{
            type: Sequelize.STRING
        },
        anioDeLanzamiento: {
            type: Sequelize.INTEGER
        }
    });
    return Cancion;
};