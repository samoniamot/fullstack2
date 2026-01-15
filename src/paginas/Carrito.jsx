// pagina del carrito de compras
function Carrito({ carrito, vaciarCarrito, realizarCompra, usuarioActual }) {
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
      
      {carrito.map(function(item, indice) {
        return (
          <div className="item-carrito row mb-3 p-2" key={indice} style={{border: '1px solid #ddd', borderRadius: '5px'}}>
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
              <p><strong>${item.precio * item.cantidad}</strong></p>
            </div>
          </div>
        );
      })}
      
      <hr />
      
      <div className="row mt-4">
        <div className="col-md-6">
          <button className="btn btn-secondary" onClick={vaciarCarrito}>
            vaciar carrito
          </button>
        </div>
        <div className="col-md-6 text-end">
          <h4>total: ${total}</h4>
          {usuarioActual ? (
            <button className="btn btn-success btn-lg mt-2" onClick={realizarCompra}>
              confirmar compra
            </button>
          ) : (
            <div>
              <p className="text-muted">debes iniciar sesion para comprar</p>
              <a href="/login" className="btn btn-primary">iniciar sesion</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Carrito;
