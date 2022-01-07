const Usuario = require('../models/usuarios.model');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

exports.login = function (req, res, next) {
    let hashedpass = crypto.createHash('sha512').update(req.body.pass).digest('hex')

    Usuario.findOne({ usuario: req.body.usuario, pass: hashedpass }, function (err, usuario) {
        let respose = {
            token: null,
        }
        if (usuario !== null) {
            respose.token = jwt.sign({
                id: usuario._id,
                usuario: usuario
            },
                '__secret__',
                { expiresIn: '12h' }
            );
        }
        res.json(respose);
    })
}

