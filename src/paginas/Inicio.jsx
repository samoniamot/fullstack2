// pagina de inicio
import TarjetaProducto from '../componentes/TarjetaProducto';
import libros from '../datos/libros';

function Inicio({ agregarAlCarrito }) {
  // mostrar solo los primeros 4 libros en inicio
  const librosDestacados = libros.slice(0, 4);

  return (
    <div>
      {/* banner principal */}
      <section className="banner-principal">
        <div className="container">
          <h1>Bienvenido a libreria online</h1>
          <p>Encuentra los mejores libros al mejor precio</p>
          <a href="/catalogo" className="btn btn-light btn-lg mt-3">Ver catalogo</a>
        </div>
      </section>

      {/* video promocional */}
      <section className="container video-container text-center">
        <h3>Video promocional</h3>
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          title="video promocional"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>

      {/* productos destacados */}
      <section className="container mt-5">
        <h2 className="mb-4">libros destacados</h2>
        <div className="row">
          {librosDestacados.map(function(libro) {
            return (
              <div className="col-md-3" key={libro.id}>
                <TarjetaProducto libro={libro} agregarAlCarrito={agregarAlCarrito} />
              </div>
            );
          })}
        </div>
        <div className="text-center mt-4">
          <a href="/catalogo" className="btn btn-primary">ver todos los libros</a>
        </div>
      </section>

      {/* seccion informativa */}
      <section className="container mt-5">
        <div className="row">
          <div className="col-md-4 text-center">
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🚚</div>
            <h4>envio gratis</h4>
            <p>en compras sobre $30.000</p>
          </div>
          <div className="col-md-4 text-center">
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🔒</div>
            <h4>pago seguro</h4>
            <p>todas las formas de pago</p>
          </div>
          <div className="col-md-4 text-center">
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>✅</div>
            <h4>garantia</h4>
            <p>30 dias de devolucion</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Inicio;
