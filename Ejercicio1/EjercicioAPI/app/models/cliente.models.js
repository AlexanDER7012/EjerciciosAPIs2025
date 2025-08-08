
module.exports = (sequelize, Sequelize) => {


    const Cliente = sequelize.define("cliente", {
        nombre: {
            type: Sequelize.STRING
        },
        correo: {
            type: Sequelize.STRING
        },
        telefono: {
            type: Sequelize.STRING
        },
      
    });
    return Cliente;
};