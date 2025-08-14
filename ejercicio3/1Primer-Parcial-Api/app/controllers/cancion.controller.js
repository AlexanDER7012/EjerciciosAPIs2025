
const db = require("../models");
const Cancion = db.canciones; 
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    
    if (!req.body.nombre) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

     
    const cancion = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        artista: req.body.artista, 
        duracion:req.body.duracion, 
        extensionDeCancion: req.body.extensionDeCancion,
        album: req.body.album,
        anioDeLanzamiento: req.body.anioDeLanzamiento,
      
      
    };


    Cancion.create(cancion)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Cancion."
            });
        });
};


exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

    Cancion.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving songs."
            });
        });
};


exports.findOne = (req, res) => {
    const id = req.params.id;

    Cancion.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Cancion with id=" + id
            });
        });
};


exports.update = (req, res) => {
    const id = req.params.id;

    Cancion.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Cancion was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Cancion with id=${id}. Maybe Cancion was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Cancion with id=" + id
            });
        });
};


exports.delete = (req, res) => {
    const id = req.params.id;

    Cancion.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Cancion was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Cancion with id=${id}. El cliente no fue encontado!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete cancion with id=" + id
            });
        });
};


