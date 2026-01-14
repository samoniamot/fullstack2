// pagina de contacto
import { useState } from 'react';

function Contacto() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  // funcion para validar
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
    } else if (correo.indexOf('@') === -1) {
      erroresTemp.correo = 'el correo debe contener @';
      esValido = false;
    }

    // validar mensaje
    if (mensaje === '') {
      erroresTemp.mensaje = 'el mensaje es obligatorio';
      esValido = false;
    } else if (mensaje.length < 10) {
      erroresTemp.mensaje = 'el mensaje debe tener al menos 10 caracteres';
      esValido = false;
    }

    setErrores(erroresTemp);
    return esValido;
  }

  // manejar envio
  function manejarEnvio(evento) {
    evento.preventDefault();
    
    if (validarFormulario()) {
      setEnviado(true);
      setNombre('');
      setCorreo('');
      setMensaje('');
    }
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h2>contactanos</h2>
          <p>tienes alguna pregunta? escribenos y te responderemos pronto.</p>
          
          {enviado && (
            <div className="alert alert-success">
              mensaje enviado correctamente! te contactaremos pronto.
            </div>
          )}
          
          <form onSubmit={manejarEnvio}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">nombre</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="nombre"
                placeholder="tu nombre"
                autoComplete="name"
                value={nombre}
                onChange={function(e) { setNombre(e.target.value); }}
              />
              {errores.nombre && <p className="mensaje-error">{errores.nombre}</p>}
            </div>
            
            <div className="mb-3">
              <label htmlFor="correo" className="form-label">correo</label>
              <input
                type="text"
                className="form-control"
                id="correo"
                name="correo"
                placeholder="tu correo"
                autoComplete="email"
                value={correo}
                onChange={function(e) { setCorreo(e.target.value); }}
              />
              {errores.correo && <p className="mensaje-error">{errores.correo}</p>}
            </div>
            
            <div className="mb-3">
              <label htmlFor="mensaje" className="form-label">mensaje</label>
              <textarea
                className="form-control"
                id="mensaje"
                name="mensaje"
                rows="4"
                placeholder="escribe tu mensaje aqui"
                value={mensaje}
                onChange={function(e) { setMensaje(e.target.value); }}
              ></textarea>
              {errores.mensaje && <p className="mensaje-error">{errores.mensaje}</p>}
            </div>
            
            <button type="submit" className="btn btn-primary">enviar mensaje</button>
          </form>
        </div>
        
        <div className="col-md-6">
          <h3>informacion de contacto</h3>
          <ul className="list-unstyled mt-4">
            <li className="mb-2"><strong>direccion:</strong> calle falsa 123, santiago</li>
            <li className="mb-2"><strong>telefono:</strong> +56 9 1234 5678</li>
            <li className="mb-2"><strong>correo:</strong> info@libreria.com</li>
            <li className="mb-2"><strong>horario:</strong> lunes a viernes 9:00 - 18:00</li>
          </ul>
          
          <h3 className="mt-4">ubicacion</h3>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.0!2d-70.6!3d-33.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI0JzAwLjAiUyA3MMKwMzYnMDAuMCJX!5e0!3m2!1ses!2scl!4v1234567890"
            width="100%" 
            height="300" 
            style={{border: 0, borderRadius: '10px'}}
            allowFullScreen=""
            loading="lazy"
            title="mapa ubicacion"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
