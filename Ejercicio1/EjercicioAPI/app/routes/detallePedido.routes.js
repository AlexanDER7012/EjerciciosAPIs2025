module.exports = app => {
    const detallePedidos = require("../controllers/detallePedido.controller.js");
    var router = require("express").Router();

    router.post("/create/", detallePedidos.create);

    router.get("/", detallePedidos.findAll);

    router.get("/:id", detallePedidos.findOne);
  
    router.put("/update/:id", detallePedidos.update);

    router.delete("/delete/:id", detallePedidos.delete);

    app.use("/api/detallePedidos", router);
};