// pagina de catalogo completo
import TarjetaProducto from '../componentes/TarjetaProducto';

function Catalogo({ libros, agregarAlCarrito }) {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">catalogo de libros</h2>
      <p className="text-muted">explora nuestra coleccion de {libros.length} libros</p>
      
      <div className="row">
        {libros.map(function(libro) {
          return (
            <div className="col-md-3 col-sm-6" key={libro.id}>
              <TarjetaProducto libro={libro} agregarAlCarrito={agregarAlCarrito} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Catalogo;
