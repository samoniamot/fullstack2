// aplicacion principal
import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//  etsilos 
import './estilos/estilos.css';

//  componetnes
import Encabezado from './componentes/Encabezado';
import PiePagina from './componentes/PiePagina';

// importar panigas
import Inicio from './paginas/Inicio';
import Catalogo from './paginas/Catalogo';
import Carrito from './paginas/Carrito';
import Login from './paginas/Login';
import Contacto from './paginas/Contacto';
import Admin from './paginas/Admin';

// navegador
function AppContenido() {
  const navigate = useNavigate();
  
  // estado del carrito
  const [carrito, setCarrito] = useState([]);
  
  // estado del usuario
  const [usuarioActual, setUsuarioActual] = useState(null);

  // funcion para agregar al carrito
  function agregarAlCarrito(libro, cantidad) {
    let item = libro;
    item.cantidad = cantidad;
    setCarrito(carrito.concat(item));
    alert('libro agregado al carrito!');
  }

  // funcion para vaciar carrito
  function vaciarCarrito() {
    setCarrito([]);
  }

  // funcion para iniciar sesion
  function iniciarSesion(usuario) {
    setUsuarioActual(usuario);
    navigate('/');
  }

  // funcion para cerrar sesion
  function cerrarSesion() {
    setUsuarioActual(null);
    setCarrito([]);
  }

  return (
    <div>
      <Encabezado 
        carrito={carrito} 
        usuarioActual={usuarioActual} 
        cerrarSesion={cerrarSesion} 
      />
      
      <main style={{minHeight: '60vh'}}>
        <Routes>
          <Route path="/" element={<Inicio agregarAlCarrito={agregarAlCarrito} />} />
          <Route path="/catalogo" element={<Catalogo agregarAlCarrito={agregarAlCarrito} />} />
          <Route path="/carrito" element={
            <Carrito 
              carrito={carrito}
              vaciarCarrito={vaciarCarrito}
            />
          } />
          <Route path="/login" element={<Login iniciarSesion={iniciarSesion} />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/admin" element={<Admin usuarioActual={usuarioActual} />} />
        </Routes>
      </main>
      
      <PiePagina />
    </div>
  );
}

// componente principal con router
function App() {
  return (
    <BrowserRouter>
      <AppContenido />
    </BrowserRouter>
  );
}

export default App;
