// componente tarjeta de producto
import { useState } from 'react';

function TarjetaProducto({ libro, agregarAlCarrito }) {
  const [cantidad, setCantidad] = useState(1);

  // funcion para aumentar cantidad
  function aumentar() {
    setCantidad(cantidad + 1);
  }

  // funcion para disminuir cantidad
  function disminuir() {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  }

  // funcion para agregar al carrito
  function manejarAgregar() {
    agregarAlCarrito(libro, cantidad);
    setCantidad(1);
  }

  return (
    <div className="tarjeta-producto">
      <img 
        src={libro.imagen} 
        alt={libro.titulo} 
        className="imagen-producto"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/200x300?text=libro';
        }}
      />
      <h5 className="titulo-producto">{libro.titulo}</h5>
      <p className="autor-producto">por {libro.autor}</p>
      <p className="precio-producto">${libro.precio.toLocaleString()}</p>
      <p className="text-muted small">{libro.descripcion}</p>
      
      <div className="control-cantidad">
        <button onClick={disminuir}>-</button>
        <span>{cantidad}</span>
        <button onClick={aumentar}>+</button>
      </div>
      
      <button className="btn-agregar" onClick={manejarAgregar}>
        agregar al carrito
      </button>
    </div>
  );
}

export default TarjetaProducto;
