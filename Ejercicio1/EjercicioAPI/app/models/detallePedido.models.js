
module.exports = (sequelize, Sequelize) => {


    const DetallePedido = sequelize.define("detallePedido", {
        id_pedido : {
            type: Sequelize.INTEGER
        },
        id_producto : {
            type: Sequelize.INTEGER
        },
        cantidad: {
            type: Sequelize.INTEGER
        },
        subtotal: {
            type: Sequelize.DECIMAL(10,2)
        },
      
    });
    return DetallePedido;
};