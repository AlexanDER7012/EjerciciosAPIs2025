

module.exports = (sequelize, Sequelize) =>{

    const Prestamo = sequelize.define("prestamos", {
        libroId : {
            type: Sequelize.INTEGER
        },
        estudianteId : {
            type: Sequelize.INTEGER
        },
        fechaPrestamo: {
            type: Sequelize.DATE
        },
        fechaDevolucion: {
            type :Sequelize.DATE,
            allowNull: true
        },
        
        
      
    });
    return Prestamo;
};