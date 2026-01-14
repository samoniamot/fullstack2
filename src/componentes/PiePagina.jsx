// componente footer de la tienda
function PiePagina() {
  return (
    <footer className="footer-tienda">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Libreria online</h5>
            <p>tu tienda de libros favorita</p>
          </div>
          <div className="col-md-4">
            <h5>Enlaces</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">inicio</a></li>
              <li><a href="/catalogo" className="text-white">catalogo</a></li>
              <li><a href="/contacto" className="text-white">contacto</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contacto</h5>
            <p>correo: info@libreria.com</p>
            <p>telefono: +56 9 1234 5678</p>
            <p>direccion: calle falsa 123, santiago</p>
          </div>
        </div>
        <hr className="bg-white" />
        <div className="text-center">
          <p>&copy; 2024 libreria online. todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default PiePagina;
