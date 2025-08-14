// usamos la función requiere para cargar el modulo db.config.js para traer los parametros preconfigurados de la BD
const dbConfig = require("../config/db.config.js");
// cargamos el modulo sequelize "ORM" para el manejo de las entidades como objetos. 
const Sequelize = require("sequelize");
// creamos una variable sequelize y la inicializamos como un Objeto Sequelize con la informacion de la BD 

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  dialectOptions:{
     ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
 
   
  }
});

const db = {};

db.Sequelize = Sequelize;

db.sequelize = sequelize;


db.estudiantes =  require("./estudiante.models.js")(sequelize,Sequelize);
db.libros =  require("./libro.models.js")(sequelize,Sequelize);
db.prestamos =  require("./prestamo.models.js")(sequelize,Sequelize);
module.exports = db;