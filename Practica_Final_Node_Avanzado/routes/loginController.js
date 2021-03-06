'use tsrict';

const Usuario = require('../models/Usuario');
const i18n = require('../lib/i18nConfigure')();
const jwt = require('jsonwebtoken');
var localStorage = require('localStorage');

class LoginController {


  index(req, res, next) {
        res.locals.email = 'user@example.com'; // para que la vista tenga el email
        res.locals.error = '';
        res.render('login');
  }

  // POST /api/authenticate

  async postLoginJWT(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    // hacemos un hash de la password
    const hashedPassword = Usuario.hashPassword(password);

    const user = await Usuario.findOne({ email: email, password: hashedPassword });

    console.log('El usuario es:',user);

    if (!user) {
      // Respondemos que no son validas las credenciales
      res.json({ok: false, error: 'Contraseña incorrecta'});
      return;
    }

    // el usuario está y coincide la password

    // creamos el token
    jwt.sign({ _id: user._id }, 'secret_key', {
      expiresIn: 600  //10min
    }, (err, token) => {
      if (err) {
        return next(err);
      }
      // respondemos con un JWT y seteo la variable con localStorage
      localStorage.setItem('token_auth',token);
      res.json({ok: true, token: token});
    });
  }

  logout(req, res, next) {

    localStorage.removeItem('token_auth');
    res.redirect('/');

  }
}

module.exports = new LoginController();