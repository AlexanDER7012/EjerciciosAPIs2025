const db = require("../models");
const Pedido = db.pedidos;  
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    if (!req.body.id_cliente) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const pedido = {
        id_cliente: req.body.id_cliente,
        fecha: req.body.fecha,
        total: req.body.total,
    };

    Pedido.create(pedido)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the pedido."
            });
        });
};


exports.findAll = (req, res) => {
    const fecha = req.query.fecha;
    var condition = fecha ? { fecha: { [Op.eq]: fecha } } : null;

    Pedido.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving clients."
            });
        });
};


exports.findOne = (req, res) => {
    const id = req.params.id;

    Pedido.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Pedido with id=" + id
            });
        });
};


exports.update = (req, res) => {
    const id = req.params.id;

    Pedido.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Pedido was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Pedido with id=${id}. Maybe Client was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Pedido with id=" + id
            });
        });
};


exports.delete = (req, res) => {
    const id = req.params.id;
  
    Pedido.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Pedido was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Pedido with id=${id}. El cliente no fue encontado!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tutorial with id=" + id
            });
        });
};




