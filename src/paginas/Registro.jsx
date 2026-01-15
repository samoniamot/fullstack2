// pagina de registro
import { useState } from 'react';

function Registro({ registrarUsuario }) {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [errores, setErrores] = useState({});
  const [mensajeExito, setMensajeExito] = useState('');

  // funcion para validar el formulario
  function validarFormulario() {
    let erroresTemp = {};
    let esValido = true;

    // validar nombre
    if (nombre === '') {
      erroresTemp.nombre = 'el nombre es obligatorio';
      esValido = false;
    } else if (nombre.length < 3) {
      erroresTemp.nombre = 'el nombre debe tener al menos 3 caracteres';
      esValido = false;
    }

    // validar correo
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

    // validar contrasena
    if (contrasena === '') {
      erroresTemp.contrasena = 'la contrasena es obligatoria';
      esValido = false;
    } else if (contrasena.length < 6) {
      erroresTemp.contrasena = 'la contrasena debe tener al menos 6 caracteres';
      esValido = false;
    }

    // validar confirmar contrasena
    if (confirmarContrasena === '') {
      erroresTemp.confirmarContrasena = 'debes confirmar la contrasena';
      esValido = false;
    } else if (contrasena !== confirmarContrasena) {
      erroresTemp.confirmarContrasena = 'las contrasenas no coinciden';
      esValido = false;
    }

    setErrores(erroresTemp);
    return esValido;
  }

  // funcion para manejar el envio
  function manejarEnvio(evento) {
    evento.preventDefault();
    setMensajeExito('');

    if (!validarFormulario()) {
      return;
    }

    // crear nuevo usuario
    let nuevoUsuario = {
      id: Date.now(),
      nombre: nombre,
      correo: correo,
      contrasena: contrasena,
      tipo: 'cliente'
    };

    registrarUsuario(nuevoUsuario);
    setMensajeExito('registro exitoso! ahora puedes iniciar sesion');
    
    // limpiar formulario
    setNombre('');
    setCorreo('');
    setContrasena('');
    setConfirmarContrasena('');
  }

  return (
    <div className="container">
      <div className="formulario-login">
        <h2 className="text-center mb-4">crear cuenta</h2>
        
        <form onSubmit={manejarEnvio}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">nombre completo</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              placeholder="ingresa tu nombre"
              autoComplete="name"
              value={nombre}
              onChange={function(e) { setNombre(e.target.value); }}
            />
            {errores.nombre && <p className="mensaje-error">{errores.nombre}</p>}
          </div>

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
              placeholder="minimo 6 caracteres"
              autoComplete="new-password"
              value={contrasena}
              onChange={function(e) { setContrasena(e.target.value); }}
            />
            {errores.contrasena && <p className="mensaje-error">{errores.contrasena}</p>}
          </div>

          <div className="mb-3">
            <label htmlFor="confirmarContrasena" className="form-label">confirmar contrasena</label>
            <input
              type="password"
              className="form-control"
              id="confirmarContrasena"
              name="confirmarContrasena"
              placeholder="repite tu contrasena"
              autoComplete="new-password"
              value={confirmarContrasena}
              onChange={function(e) { setConfirmarContrasena(e.target.value); }}
            />
            {errores.confirmarContrasena && <p className="mensaje-error">{errores.confirmarContrasena}</p>}
          </div>
          
          {errores.general && <p className="mensaje-error">{errores.general}</p>}
          {mensajeExito && <p className="mensaje-exito">{mensajeExito}</p>}
          
          <button type="submit" className="btn btn-primary w-100">registrarse</button>
        </form>
        
        <hr />
        
        <div className="text-center mt-3">
          <p>ya tienes cuenta? <a href="/login">inicia sesion aqui</a></p>
        </div>
      </div>
    </div>
  );
}

export default Registro;
