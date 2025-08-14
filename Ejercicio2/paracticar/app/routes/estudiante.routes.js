module.exports = app => {
    const estudiantes = require("../controllers/estudiante.controller.js");
    var router = require("express").Router();
    
    router.post("/create/", estudiantes.create);

    router.get("/", estudiantes.findAll);

    router.get("/:id", estudiantes.findOne);

    router.put("/update/:id", estudiantes.update);
  
    router.delete("/delete/:id", estudiantes.delete);
 
    app.use("/api/estudiantes", router);
};