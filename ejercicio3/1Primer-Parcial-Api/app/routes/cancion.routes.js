module.exports = app => {
    const canciones = require("../controllers/cancion.controller.js");
    var router = require("express").Router();
  
    router.post("/create/", canciones.create);

    router.get("/", canciones.findAll);

    router.get("/:id", canciones.findOne);

    router.put("/update/:id", canciones.update);

    router.delete("/delete/:id", canciones.delete);

    app.use("/api/cancion", canciones);//<============== POR ESA VARIABLE CANCIONES ME TARDE 50 minutos MINUTOS encontrar la solucion(cambie la variable router )