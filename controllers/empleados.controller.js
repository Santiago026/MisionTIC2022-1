const Empleado = require('../models/empleados.model');

let response = {
    msg: '',
    exito: false,
};

//Creamos empleados a partir de la funcion create
exports.create = function (req, res) {
    let empleado = new Empleado(
        {
            nombre: req.body.nombre,
            apellido_p: req.body.apellido_p,
            apellido_m: req.body.apellido_m,
            telefono: req.body.telefono,
            email: req.body.email,
            direccion: req.body.direccion
        }
    );
    empleado.save(function (err) {
        if (err) {
            console.error(err);
            response.exito = false;
            response.msg = 'Error al crear o guardar el empleado';
            res.json(response);
            return;
        }
    });

    response.exito = true;
    console.log(response.msg = 'Empleado creado exitosamente');
    response.msg = 'Empleado creado exitosamente o correctamente';
    res.json(response);
};


/*Creamos una función para obtener a todos los empleados

*/

exports.find = function (req, res) {
    Empleado.find(function (err, empleados) {
        console.log(response.msg = 'Empleados obtenidos exitosamente');
        res.json(empleados);
    });
};

/*Creamos una función para obtener un empleado por id

*/
exports.findOne = function (req, res) {
    Empleado.findOne({ _id: req.params.id }, function (err, empleado) {
        console.log(response.msg = 'Empleados obtenidos exitosamente');
        res.json(empleado);
    });
};

/*Creamos una función para actualizar un empleado

*/
exports.update = function (req, res) {
    let empleado = {
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        email: req.body.email,
        direccion: req.body.direccion

    };
    Empleado.findByIdAndUpdate(req.params.id, { $set: empleado }, function (err) {
        if (err) {
            console.error(err)
            response.exito = false;
            response.msg = 'Error al actualizar el empleado';
            res.json(response);
            return;
        }
        response.exito = true;
        console.log(response.msg = 'Empleado actualizado exitosamente');
        response.msg = 'Empleado actualizado exitosamente';
        res.json(response);
    });
};

/*Creamos una función para eliminar un empleado

*/
exports.remove = function (req, res) {
    Empleado.findByIdAndRemove({ _id: req.params.id }, function (err) {
        if (err) {
            console.error(err);
            response.exito = false;
            response.msg = 'Error al eliminar el empleado';
            res.json(response);
            return;
        }
        response.exito = true;
        console.log(response.msg = 'Empleado eliminado exitosamente');
        response.msg = 'Empleado eliminado exitosamente';
        res.json(response);
    });
};

