// pagina de inicio
import TarjetaProducto from '../componentes/TarjetaProducto';

function Inicio({ libros, agregarAlCarrito }) {
  // mostrar solo los primeros 4 libros en inicio
  let librosDestacados = [];
  for (let i = 0; i < 4 && i < libros.length; i++) {
    librosDestacados.push(libros[i]);
  }

  return (
    <div>
      {/* banner principal con imagen de fondo */}
      <section style={{
        backgroundImage: 'url(/banner-fondo.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className="container text-center" style={{backgroundColor: 'rgba(0,0,0,0.5)', padding: '40px', borderRadius: '10px'}}>
          <h1 style={{color: 'white', fontSize: '2.5rem'}}>bienvenido a libreria online</h1>
          <p style={{color: 'white', fontSize: '1.2rem'}}>encuentra los mejores libros al mejor precio</p>
          <a href="/catalogo" className="btn btn-light btn-lg mt-3">ver catalogo</a>
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
