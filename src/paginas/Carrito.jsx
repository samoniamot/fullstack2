// pagina del carrito de compras
function Carrito({ carrito, vaciarCarrito }) {
  // calcular total
  let total = 0;
  for (let i = 0; i < carrito.length; i++) {
    total = total + (carrito[i].precio * carrito[i].cantidad);
  }

  // si el carrito esta vacio
  if (carrito.length === 0) {
    return (
      <div className="container mt-4 text-center">
        <h2>tu carrito esta vacio</h2>
        <p>agrega algunos libros para comenzar</p>
        <a href="/catalogo" className="btn btn-primary">ir al catalogo</a>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">tu carrito</h2>
      
      {carrito.map(function(item) {
        return (
          <div className="item-carrito row" key={item.id}>
            <div className="col-md-2">
              <img 
                src={item.imagen} 
                alt={item.titulo} 
                style={{width: '80px', height: '100px', objectFit: 'cover'}}
              />
            </div>
            <div className="col-md-5">
              <h5>{item.titulo}</h5>
              <p>{item.autor}</p>
            </div>
            <div className="col-md-2">
              <p>cantidad: {item.cantidad}</p>
            </div>
            <div className="col-md-3">
              <p>${item.precio * item.cantidad}</p>
            </div>
          </div>
        );
      })}
      
      <hr />
      
      <div className="row mt-4">
        <div className="col-md-8">
          <button className="btn btn-secondary" onClick={vaciarCarrito}>
            vaciar carrito
          </button>
        </div>
        <div className="col-md-4 text-end">
          <p>total: ${total}</p>
          <button className="btn btn-success btn-lg">proceder al pago</button>
        </div>
      </div>
    </div>
  );
}

export default Carrito;
