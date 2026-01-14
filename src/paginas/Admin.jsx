// pagina de administracion (solo para admin)
import libros from '../datos/libros';

function Admin({ usuarioActual }) {
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
      
      <div className="panel-admin">
        <h4>resumen</h4>
        <div className="row">
          <div className="col-md-4">
            <div className="card text-center p-3">
              <h3>{libros.length}</h3>
              <p>productos en catalogo</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center p-3">
              <h3>2</h3>
              <p>usuarios registrados</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center p-3">
              <h3>$0</h3>
              <p>ventas del dia</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <h4>lista de productos</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>id</th>
              <th>titulo</th>
              <th>autor</th>
              <th>precio</th>
            </tr>
          </thead>
          <tbody>
            {libros.map(function(libro) {
              return (
                <tr key={libro.id}>
                  <td>{libro.id}</td>
                  <td>{libro.titulo}</td>
                  <td>{libro.autor}</td>
                  <td>${libro.precio.toLocaleString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
