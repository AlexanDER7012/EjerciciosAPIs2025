
module.exports = (sequelize, Sequelize) => {


    const Pedido = sequelize.define("pedido", {
        id_cliente : {
            type: Sequelize.INTEGER
        },
        fecha: {
            type: Sequelize.DATE
        },
        total: {
            type: Sequelize.DECIMAL(10,2)
        },
      
    });
    return Pedido;
};