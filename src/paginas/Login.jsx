// pagina de login
import { useState } from 'react';
import usuarios from '../datos/usuarios';

function Login({ iniciarSesion }) {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [errores, setErrores] = useState({});
  const [mensajeExito, setMensajeExito] = useState('');

  // funcion para validar el formulario
  function validarFormulario() {
    let erroresTemp = {};
    let esValido = true;

    // valdicaiones utra basicas de correo
    if (correo === '') {
      erroresTemp.correo = 'el correo es obligatorio';
      esValido = false;
    } else if (correo.length < 5) {
      erroresTemp.correo = 'el correo debe tener al menos 5 caracteres';
      esValido = false;
    } else if (correo.indexOf('@') === -1) {
      erroresTemp.correo = 'el correo debe contener @';
      esValido = false;
    }

    // validar la contraseña
    if (contrasena === '') {
      erroresTemp.contrasena = 'la contrasena es obligatoria';
      esValido = false;
    } else if (contrasena.length < 6) {
      erroresTemp.contrasena = 'la contrasena debe tener al menos 6 caracteres';
      esValido = false;
    }

    setErrores(erroresTemp);
    return esValido;
  }

  // funcion para manejar el envio del formulario
  function manejarEnvio(evento) {
    evento.preventDefault();
    setMensajeExito('');

    // validar formulario
    if (!validarFormulario()) {
      return;
    }

    // buscar usuario
    let usuarioEncontrado = null;
    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].correo === correo && usuarios[i].contrasena === contrasena) {
        usuarioEncontrado = usuarios[i];
        break;
      }
    }

    if (usuarioEncontrado) {
      setMensajeExito('inicio de sesion exitoso!');
      iniciarSesion(usuarioEncontrado);
    } else {
      setErrores({ general: 'correo o contrasena incorrectos' });
    }
  }

  return (
    <div className="container">
      <div className="formulario-login">
        <h2 className="text-center mb-4">iniciar sesion</h2>
        
        <form onSubmit={manejarEnvio}>
          <div className="mb-3">
            <label htmlFor="correo" className="form-label">correo electronico</label>
            <input
              type="text"
              className="form-control"
              id="correo"
              name="correo"
              placeholder="ingresa tu correo"
              autoComplete="email"
              value={correo}
              onChange={function(e) { setCorreo(e.target.value); }}
            />
            {errores.correo && <p className="mensaje-error">{errores.correo}</p>}
          </div>
          
          <div className="mb-3">
            <label htmlFor="contrasena" className="form-label">contrasena</label>
            <input
              type="password"
              className="form-control"
              id="contrasena"
              name="contrasena"
              placeholder="ingresa tu contrasena"
              autoComplete="current-password"
              value={contrasena}
              onChange={function(e) { setContrasena(e.target.value); }}
            />
            {errores.contrasena && <p className="mensaje-error">{errores.contrasena}</p>}
          </div>
          
          {errores.general && <p className="mensaje-error">{errores.general}</p>}
          {mensajeExito && <p className="mensaje-exito">{mensajeExito}</p>}
          
          <button type="submit" className="btn btn-primary w-100">ingresar</button>
        </form>
        
        <hr />
        
        <div className="text-muted small mt-3">
          <p><strong>usuarios de tetsing:</strong></p>
          <p>admin: admin@tienda.com / admin123</p>
          <p>cliente: cliente@tienda.com / cliente123</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
