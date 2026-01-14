// componente header de la tienda
import { Link } from 'react-router-dom';

function Encabezado({ carrito, usuarioActual, cerrarSesion }) {
  // calcular total de items en carrito
  let totalItems = 0;
  for (let i = 0; i < carrito.length; i++) {
    totalItems = totalItems + carrito[i].cantidad;
  }

  return (
    <header className="header-tienda">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand text-white" to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/logo_app.webp" alt="logo" style={{ height: '50px' }} />
          </Link>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/catalogo">catalogo</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacto">contacto</Link>
              </li>
              {usuarioActual && usuarioActual.tipo === "admin" && (
                <li className="nav-item">
                  <Link className="nav-link" to="/admin">admin</Link>
                </li>
              )}
            </ul>
            
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link icono-carrito" to="/carrito">
                  🛒
                  {totalItems > 0 && (
                    <span className="contador-carrito">{totalItems}</span>
                  )}
                </Link>
              </li>
              <li className="nav-item">
                {usuarioActual ? (
                  <div className="d-flex align-items-center">
                    <span className="text-dark me-2">hola, {usuarioActual.nombre}</span>
                    <button className="btn btn-outline-dark btn-sm" onClick={cerrarSesion}>
                      salir
                    </button>
                  </div>
                ) : (
                  <Link className="nav-link" to="/login">ingresar</Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Encabezado;
