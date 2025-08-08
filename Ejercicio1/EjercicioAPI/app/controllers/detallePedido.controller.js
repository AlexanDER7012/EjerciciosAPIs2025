const db = require("../models");
const detallePedido = db.detallePedidos; 
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    if (!req.body.id_pedido) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const detalle_pedido = {
        id_pedido: req.body.id_pedido,
        id_producto: req.body.id_producto,
        cantidad: req.body.cantidad,
        subtotal : req.body.subtotal
    };

    detallePedido.create(detalle_pedido)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Client."
            });
        });
};


exports.findAll = (req, res) => {
    const id_pedido = req.query.id_pedido;
    var condition = id_pedido ? { id_pedido: { [Op.eq]: id_pedido } } : null;

    detallePedido.findAll({ where: condition })
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

    detallePedido.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving detallePedido with id=" + id
            });
        });
};


exports.update = (req, res) => {
    const id = req.params.id;

    detallePedido.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "detallePedido was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update detallePedido with id=${id}. Maybe Client was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating detallePedido with id=" + id
            });
        });
};


exports.delete = (req, res) => {
    const id = req.params.id;
   
    detallePedido.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "detallePedido was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete detallePedido with id=${id}. El cliente no fue encontado!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tutorial with id=" + id
            });
        });
};




