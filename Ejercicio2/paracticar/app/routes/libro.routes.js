module.exports = app => {
    const libros = require("../controllers/libro.controller.js");
    var router = require("express").Router();
    
    router.post("/create/", libros.create);

    router.get("/", libros.findAll);

    router.get("/disponibles",libros.librosDisponibles);

    router.get("/:id", libros.findOne);

    router.put("/update/:id", libros.update);
  
    router.delete("/delete/:id", libros.delete);
 
    app.use("/api/libros", router);
};