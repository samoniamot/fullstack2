// panel de admionistracion 
import { useState } from 'react';

function Admin({ usuarioActual, libros, pedidos, agregarLibro, editarLibro, eliminarLibro, cambiarEstadoPedido }) {
  // seccion actual q se muestra
  const [seccionActual, setSeccionActual] = useState('productos');
  
  // para el fomrulario de agregar
  const [mostrarForm, setMostrarForm] = useState(false);
  const [nuevoTitulo, setNuevoTitulo] = useState('');
  const [nuevoAutor, setNuevoAutor] = useState('');
  const [nuevoPrecio, setNuevoPrecio] = useState('');
  const [nuevoStock, setNuevoStock] = useState('');

  // para editar un libro
  const [editandoId, setEditandoId] = useState(null);
  const [editTitulo, setEditTitulo] = useState('');
  const [editAutor, setEditAutor] = useState('');
  const [editPrecio, setEditPrecio] = useState('');
  const [editStock, setEditStock] = useState('');
  
  // si no es admin no puede ver nada
  if (!usuarioActual || usuarioActual.tipo !== 'admin') {
    return (
      <div className="container mt-4 text-center">
        <h2>acceso denegado</h2>
        <p>necesitas ser administrador para ver esta pagina</p>
        <a href="/login" className="btn btn-primary">iniciar sesion</a>
      </div>
    );
  }

  // agregar libro nuevo
  function agregarNuevoLibro() {
    // validar que no esten vacios
    if (nuevoTitulo === '' || nuevoAutor === '' || nuevoPrecio === '') {
      alert('llena todos los campos porfavor');
      return;
    }

    let libro = {
      id: Date.now(),
      titulo: nuevoTitulo,
      autor: nuevoAutor,
      precio: parseInt(nuevoPrecio),
      stock: parseInt(nuevoStock) || 100,
      imagen: '/libro1.webp',
      descripcion: 'libro nuevo'
    };

    agregarLibro(libro);
    
    // limpiar campos
    setNuevoTitulo('');
    setNuevoAutor('');
    setNuevoPrecio('');
    setNuevoStock('');
    setMostrarForm(false);
    alert('libro agregado exitosamente');
  }

  // empezar a editar un libro
  function empezarEditar(libro) {
    setEditandoId(libro.id);
    setEditTitulo(libro.titulo);
    setEditAutor(libro.autor);
    setEditPrecio(libro.precio.toString());
    setEditStock(libro.stock.toString());
  }

  // guardar los cambios del libro
  function guardarCambios(libro) {
    let libroActualizado = {
      id: libro.id,
      titulo: editTitulo,
      autor: editAutor,
      precio: parseInt(editPrecio),
      stock: parseInt(editStock),
      imagen: libro.imagen,
      descripcion: libro.descripcion
    };

    editarLibro(libroActualizado);
    setEditandoId(null);
    alert('cambios guardados');
  }

  // borrar un libro
  function borrarLibro(id) {
    if (confirm('estas seguro de eliminar?')) {
      eliminarLibro(id);
      alert('libro eliminado');
    }
  }

  return (
    <div className="container mt-4">
      <h2>panel de administracion</h2>
      <p>hola {usuarioActual.nombre}</p>
      
      {/* botones para cambiar seccion */}
      <div style={{marginBottom: '20px'}}>
        <button 
          onClick={function() { setSeccionActual('productos'); }}
          style={{marginRight: '10px', padding: '10px', backgroundColor: seccionActual === 'productos' ? '#2980b9' : '#3498db', color: 'white', border: 'none', cursor: 'pointer'}}
        >
          productos
        </button>
        <button 
          onClick={function() { setSeccionActual('pedidos'); }}
          style={{padding: '10px', backgroundColor: seccionActual === 'pedidos' ? '#2980b9' : '#3498db', color: 'white', border: 'none', cursor: 'pointer'}}
        >
          pedidos
        </button>
      </div>

      {/* seccion de productos */}
      {seccionActual === 'productos' && (
        <div>
          <h3>productos</h3>
          
          <button 
            onClick={function() { setMostrarForm(!mostrarForm); }}
            style={{marginBottom: '15px', padding: '10px', backgroundColor: '#27ae60', color: 'white', border: 'none', cursor: 'pointer'}}
          >
            {mostrarForm ? 'cancelar' : 'agregar libro'}
          </button>

          {/* formulario para agregar */}
          {mostrarForm && (
            <div style={{marginBottom: '20px', padding: '15px', backgroundColor: '#f5f5f5', border: '1px solid #ddd'}}>
              <h4>nuevo libro</h4>
              <input 
                type="text" 
                placeholder="titulo" 
                value={nuevoTitulo}
                onChange={function(e) { setNuevoTitulo(e.target.value); }}
                style={{padding: '8px', marginRight: '10px', marginBottom: '10px'}}
              />
              <input 
                type="text" 
                placeholder="autor" 
                value={nuevoAutor}
                onChange={function(e) { setNuevoAutor(e.target.value); }}
                style={{padding: '8px', marginRight: '10px', marginBottom: '10px'}}
              />
              <input 
                type="number" 
                placeholder="precio" 
                value={nuevoPrecio}
                onChange={function(e) { setNuevoPrecio(e.target.value); }}
                style={{padding: '8px', marginRight: '10px', marginBottom: '10px', width: '100px'}}
              />
              <input 
                type="number" 
                placeholder="stock" 
                value={nuevoStock}
                onChange={function(e) { setNuevoStock(e.target.value); }}
                style={{padding: '8px', marginRight: '10px', marginBottom: '10px', width: '80px'}}
              />
              <br />
              <button 
                onClick={agregarNuevoLibro}
                style={{padding: '8px 15px', backgroundColor: '#27ae60', color: 'white', border: 'none', cursor: 'pointer'}}
              >
                guardar
              </button>
            </div>
          )}

          {/* tabla de libros */}
          <table style={{width: '100%', borderCollapse: 'collapse'}}>
            <thead>
              <tr style={{backgroundColor: '#eee'}}>
                <th style={{padding: '10px', textAlign: 'left', border: '1px solid #ddd'}}>id</th>
                <th style={{padding: '10px', textAlign: 'left', border: '1px solid #ddd'}}>titulo</th>
                <th style={{padding: '10px', textAlign: 'left', border: '1px solid #ddd'}}>autor</th>
                <th style={{padding: '10px', textAlign: 'left', border: '1px solid #ddd'}}>precio</th>
                <th style={{padding: '10px', textAlign: 'left', border: '1px solid #ddd'}}>stock</th>
                <th style={{padding: '10px', textAlign: 'left', border: '1px solid #ddd'}}>acciones</th>
              </tr>
            </thead>
            <tbody>
              {libros.map(function(libro) {
                // si estoy editando este libro
                if (editandoId === libro.id) {
                  return (
                    <tr key={libro.id} style={{backgroundColor: '#ffffd0'}}>
                      <td style={{padding: '10px', border: '1px solid #ddd'}}>{libro.id}</td>
                      <td style={{padding: '10px', border: '1px solid #ddd'}}>
                        <input type="text" value={editTitulo} onChange={function(e) { setEditTitulo(e.target.value); }} style={{padding: '5px'}} />
                      </td>
                      <td style={{padding: '10px', border: '1px solid #ddd'}}>
                        <input type="text" value={editAutor} onChange={function(e) { setEditAutor(e.target.value); }} style={{padding: '5px'}} />
                      </td>
                      <td style={{padding: '10px', border: '1px solid #ddd'}}>
                        <input type="number" value={editPrecio} onChange={function(e) { setEditPrecio(e.target.value); }} style={{padding: '5px', width: '80px'}} />
                      </td>
                      <td style={{padding: '10px', border: '1px solid #ddd'}}>
                        <input type="number" value={editStock} onChange={function(e) { setEditStock(e.target.value); }} style={{padding: '5px', width: '60px'}} />
                      </td>
                      <td style={{padding: '10px', border: '1px solid #ddd'}}>
                        <button onClick={function() { guardarCambios(libro); }} style={{marginRight: '5px', padding: '5px 10px', backgroundColor: '#27ae60', color: 'white', border: 'none'}}>guardar</button>
                        <button onClick={function() { setEditandoId(null); }} style={{padding: '5px 10px', backgroundColor: '#95a5a6', color: 'white', border: 'none'}}>cancelar</button>
                      </td>
                    </tr>
                  );
                }

                // fila normal sin editar
                return (
                  <tr key={libro.id}>
                    <td style={{padding: '10px', border: '1px solid #ddd'}}>{libro.id}</td>
                    <td style={{padding: '10px', border: '1px solid #ddd'}}>{libro.titulo}</td>
                    <td style={{padding: '10px', border: '1px solid #ddd'}}>{libro.autor}</td>
                    <td style={{padding: '10px', border: '1px solid #ddd'}}>${libro.precio}</td>
                    <td style={{padding: '10px', border: '1px solid #ddd'}}>{libro.stock}</td>
                    <td style={{padding: '10px', border: '1px solid #ddd'}}>
                      <button onClick={function() { empezarEditar(libro); }} style={{marginRight: '5px', padding: '5px 10px', backgroundColor: '#f39c12', color: 'white', border: 'none'}}>editar</button>
                      <button onClick={function() { borrarLibro(libro.id); }} style={{padding: '5px 10px', backgroundColor: '#e74c3c', color: 'white', border: 'none'}}>eliminar</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* seccion de pedidos */}
      {seccionActual === 'pedidos' && (
        <div>
          <h3>pedidos</h3>
          
          {pedidos.length === 0 ? (
            <p>no hay pedidos aun</p>
          ) : (
            <table style={{width: '100%', borderCollapse: 'collapse'}}>
              <thead>
                <tr style={{backgroundColor: '#eee'}}>
                  <th style={{padding: '10px', textAlign: 'left', border: '1px solid #ddd'}}>fecha</th>
                  <th style={{padding: '10px', textAlign: 'left', border: '1px solid #ddd'}}>cliente</th>
                  <th style={{padding: '10px', textAlign: 'left', border: '1px solid #ddd'}}>productos</th>
                  <th style={{padding: '10px', textAlign: 'left', border: '1px solid #ddd'}}>total</th>
                  <th style={{padding: '10px', textAlign: 'left', border: '1px solid #ddd'}}>estado</th>
                  <th style={{padding: '10px', textAlign: 'left', border: '1px solid #ddd'}}>acciones</th>
                </tr>
              </thead>
              <tbody>
                {pedidos.map(function(pedido) {
                  // color del estado
                  let colorEstado = '#3498db';
                  if (pedido.estado === 'entregado') {
                    colorEstado = '#27ae60';
                  }
                  if (pedido.estado === 'cancelada') {
                    colorEstado = '#e74c3c';
                  }

                  return (
                    <tr key={pedido.id}>
                      <td style={{padding: '10px', border: '1px solid #ddd'}}>{pedido.fecha}</td>
                      <td style={{padding: '10px', border: '1px solid #ddd'}}>{pedido.cliente}</td>
                      <td style={{padding: '10px', border: '1px solid #ddd'}}>
                        {pedido.productos.map(function(p, i) {
                          return p.titulo + ' x' + p.cantidad + (i < pedido.productos.length - 1 ? ', ' : '');
                        })}
                      </td>
                      <td style={{padding: '10px', border: '1px solid #ddd'}}>${pedido.total}</td>
                      <td style={{padding: '10px', border: '1px solid #ddd'}}>
                        <span style={{padding: '3px 8px', backgroundColor: colorEstado, color: 'white', borderRadius: '3px'}}>{pedido.estado}</span>
                      </td>
                      <td style={{padding: '10px', border: '1px solid #ddd'}}>
                        <button onClick={function() { cambiarEstadoPedido(pedido.id, 'entregado'); }} style={{marginRight: '5px', padding: '5px 10px', backgroundColor: '#27ae60', color: 'white', border: 'none'}}>entregado</button>
                        <button onClick={function() { cambiarEstadoPedido(pedido.id, 'cancelada'); }} style={{padding: '5px 10px', backgroundColor: '#e74c3c', color: 'white', border: 'none'}}>cancelar</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}

export default Admin;
