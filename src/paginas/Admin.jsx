// pagina de administracion (solo para admin)
import { useState } from 'react';
import libros from '../datos/libros';

function Admin({ usuarioActual }) {
  const [seccionActual, setSeccionActual] = useState('productos');
  
  // verificar si es admin
  if (!usuarioActual || usuarioActual.tipo !== 'admin') {
    return (
      <div className="container mt-4 text-center">
        <h2>acceso denegado</h2>
        <p>necesitas ser administrador para ver esta pagina</p>
        <a href="/login" className="btn btn-primary">iniciar sesion</a>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>panel de administracion</h2>
      <p>bienvenido, {usuarioActual.nombre}</p>
      
      <div style={{marginBottom: '20px'}}>
        <button 
          onClick={() => setSeccionActual('productos')}
          style={{marginRight: '10px', padding: '10px', border: '1px solid #333', backgroundColor: '#3498db', color: 'white', cursor: 'pointer'}}
        >
          administrar productos
        </button>
        <button 
          onClick={() => setSeccionActual('pedidos')}
          style={{padding: '10px', border: '1px solid #333', backgroundColor: '#3498db', color: 'white', cursor: 'pointer'}}
        >
          gestionar pedidos
        </button>
      </div>

      {/* PRODUTCOS */}
      {seccionActual === 'productos' && (
        <div style={{marginTop: '30px'}}>
          <h3>administrar productos</h3>
          <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '20px'}}>
            <thead>
              <tr style={{backgroundColor: '#f0f0f0', borderBottom: '1px solid #333'}}>
                <th style={{padding: '10px', textAlign: 'left', borderRight: '1px solid #333'}}>id</th>
                <th style={{padding: '10px', textAlign: 'left', borderRight: '1px solid #333'}}>titulo</th>
                <th style={{padding: '10px', textAlign: 'left', borderRight: '1px solid #333'}}>autor</th>
                <th style={{padding: '10px', textAlign: 'left', borderRight: '1px solid #333'}}>precio</th>
                <th style={{padding: '10px', textAlign: 'left', borderRight: '1px solid #333'}}>stock</th>
                <th style={{padding: '10px', textAlign: 'left'}}>acciones</th>
              </tr>
            </thead>
            <tbody>
              {libros.map(function(libro) {
                return (
                  <tr key={libro.id} style={{borderBottom: '1px solid #ddd'}}>
                    <td style={{padding: '10px', borderRight: '1px solid #ddd'}}>{libro.id}</td>
                    <td style={{padding: '10px', borderRight: '1px solid #ddd'}}>{libro.titulo}</td>
                    <td style={{padding: '10px', borderRight: '1px solid #ddd'}}>{libro.autor}</td>
                    <td style={{padding: '10px', borderRight: '1px solid #ddd'}}>${libro.precio}</td>
                    <td style={{padding: '10px', borderRight: '1px solid #ddd'}}>{libro.stock}</td>
                    <td style={{padding: '10px'}}>
                      <button 
                        onClick={() => alert('boton editar no funciona')}
                        style={{marginRight: '5px', padding: '5px 10px', border: '1px solid #333', backgroundColor: '#f39c12', color: 'white', cursor: 'pointer'}}
                      >
                        editar
                      </button>
                      <button 
                        onClick={() => alert('boton eliminar no funciona')}
                        style={{padding: '5px 10px', border: '1px solid #333', backgroundColor: '#e74c3c', color: 'white', cursor: 'pointer'}}
                      >
                        eliminar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* LOS PEDIDOS */}
      {seccionActual === 'pedidos' && (
        <div style={{marginTop: '30px'}}>
          <h3>gestionar pedidos</h3>
          <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '20px'}}>
            <thead>
              <tr style={{backgroundColor: '#f0f0f0', borderBottom: '1px solid #333'}}>
                <th style={{padding: '10px', textAlign: 'left', borderRight: '1px solid #333'}}>numero pedido</th>
                <th style={{padding: '10px', textAlign: 'left', borderRight: '1px solid #333'}}>cliente</th>
                <th style={{padding: '10px', textAlign: 'left', borderRight: '1px solid #333'}}>total</th>
                <th style={{padding: '10px', textAlign: 'left', borderRight: '1px solid #333'}}>estado</th>
                <th style={{padding: '10px', textAlign: 'left'}}>acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{borderBottom: '1px solid #ddd'}}>
                <td style={{padding: '10px', borderRight: '1px solid #ddd'}}>001</td>
                <td style={{padding: '10px', borderRight: '1px solid #ddd'}}>juan perez</td>
                <td style={{padding: '10px', borderRight: '1px solid #ddd'}}>$45,980</td>
                <td style={{padding: '10px', borderRight: '1px solid #ddd'}}>pendiente</td>
                <td style={{padding: '10px'}}>
                  <button 
                    onClick={() => alert('boton procesar no funciona')}
                    style={{marginRight: '5px', padding: '5px 10px', border: '1px solid #333', backgroundColor: '#27ae60', color: 'white', cursor: 'pointer'}}
                  >
                    procesar
                  </button>
                  <button 
                    onClick={() => alert('boton cancelar no funciona')}
                    style={{padding: '5px 10px', border: '1px solid #333', backgroundColor: '#e74c3c', color: 'white', cursor: 'pointer'}}
                  >
                    cancelar
                  </button>
                </td>
              </tr>
              <tr style={{borderBottom: '1px solid #ddd'}}>
                <td style={{padding: '10px', borderRight: '1px solid #ddd'}}>002</td>
                <td style={{padding: '10px', borderRight: '1px solid #ddd'}}>maria garcia</td>
                <td style={{padding: '10px', borderRight: '1px solid #ddd'}}>$28,980</td>
                <td style={{padding: '10px', borderRight: '1px solid #ddd'}}>enviado</td>
                <td style={{padding: '10px'}}>
                  <button 
                    onClick={() => alert('boton procesar no funciona')}
                    style={{marginRight: '5px', padding: '5px 10px', border: '1px solid #333', backgroundColor: '#27ae60', color: 'white', cursor: 'pointer'}}
                  >
                    procesar
                  </button>
                  <button 
                    onClick={() => alert('boton cancelar no funciona')}
                    style={{padding: '5px 10px', border: '1px solid #333', backgroundColor: '#e74c3c', color: 'white', cursor: 'pointer'}}
                  >
                    cancelar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Admin;
