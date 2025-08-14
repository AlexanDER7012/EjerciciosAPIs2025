const db = require("../models");
const Prestamo = db.prestamos; 
const Estudiante = db.estudiantes;
const Libro = db.libros;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    if (!req.body.libroId||!req.body.estudianteId) {
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }

    Libro.findByPk(req.body.libroId)
    .then(libro=>{
        if (!libro){
            return res.status(404).send({message:"Libro no encontrado"});
        }
        if(!libro.disponible){
            return res.status(404).send({message:"El Libro no esta disponible para prestamo"});
        }
    
    const prestamo = {
        libroId: req.body.libroId,
        estudianteId: req.body.estudianteId,
        fechaPrestamo: req.body.fechaPrestamo,
        fechaDevolucion: req.body.fechaDevolucion,
    };

    Prestamo.create(prestamo)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Prestamo."
            });
        });
        })
        .catch(err =>{
            res.status(500).send({
                message: "Error al buscar el libro"
            });
        });
};


exports.findAll = (req, res) => {
    const libroid = req.query.libroId;
    var condition = libroid ? { libroid: { [Op.eq]: `${nombre}` } } : null;

    Prestamo.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Prestamo."
            });
        });
};


exports.findOne = (req, res) => {
    const id = req.params.id;

    Prestamo.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Prestamo with id=" + id
            });
        });
};


exports.update = (req, res) => {
    const id = req.params.id;

    Prestamo.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {

                
                res.send({
                    message: "la fecha de entrega se ha registrado."
                });
            } else {
                res.send({
                    message: `Cannot update Prestamo with id=${id}. Maybe Prestamo was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Prestamo with id=" + id
            });
        });
};


exports.delete = (req, res) => {
    const id = req.params.id;
    
    Prestamo.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Prestamo was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Prestamo with id=${id}. El Prestamo no fue encontado!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tutorial with id=" + id
            });
        });
};


exports.consultarLibrosPrestados = (req,res) => {
const idEstudiante = req.params.idEstudiante;

Estudiante.findByPk(idEstudiante)
        .then(resultado => {
           if(!resultado){
            return res.status(404).send({
        message: "No se encontró el estudiante con id=" + idEstudiante
      });
           }

    
    var condition =  { estudianteId: { [Op.eq]: idEstudiante } };

        Prestamo.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Prestamo."
            });
        });
        
        
        }).catch(err =>{ res.status(500).send({message:"Error retrieving estudiante with id=" + idEstudiante})
    });

    
};


exports.updateFechaDevolucion = (req, res) => {
    const id = req.params.id;

    Prestamo.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num.fechaDevolucion !== null) {
                res.send({
                    message: "El libro se ha regresado!."
                });
            } else {
                res.send({
                    message: `Cannot update Prestamo with id=${id}. Maybe Prestamo was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Prestamo with id=" + id
            });
        });
};
