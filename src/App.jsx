// aplicacion principal
import { useState, useEffect } from 'react';
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
import Registro from './paginas/Registro';
import Contacto from './paginas/Contacto';
import Admin from './paginas/Admin';

// importar datos
import usuariosIniciales from './datos/usuarios';
import librosIniciales from './datos/libros';

// funcion para obtener usuario guardado
function obtenerUsuarioGuardado() {
  let guardado = localStorage.getItem('usuarioActual');
  if (guardado) {
    return JSON.parse(guardado);
  }
  return null;
}

// funcion para obtener carrito guardado
function obtenerCarritoGuardado() {
  let guardado = localStorage.getItem('carrito');
  if (guardado) {
    return JSON.parse(guardado);
  }
  return [];
}

// navegador
function AppContenido() {
  const navigate = useNavigate();
  
  // estado del carrito - cargar desde localStorage
  const [carrito, setCarrito] = useState(obtenerCarritoGuardado);
  
  // estado del usuario - cargar desde localStorage
  const [usuarioActual, setUsuarioActual] = useState(obtenerUsuarioGuardado);

  // estado de usuarios registrados
  const [usuarios, setUsuarios] = useState(usuariosIniciales);

  // estado de libros (para admin)
  const [libros, setLibros] = useState(librosIniciales);

  // estado de pedidos
  const [pedidos, setPedidos] = useState([]);

  // guardar usuario en localStorage cuando cambie
  useEffect(function() {
    if (usuarioActual) {
      localStorage.setItem('usuarioActual', JSON.stringify(usuarioActual));
    } else {
      localStorage.removeItem('usuarioActual');
    }
  }, [usuarioActual]);

  // guardar carrito en localStorage cuando cambie
  useEffect(function() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  // funcion para agregar al carrito
  function agregarAlCarrito(libro, cantidad) {
    let item = {
      id: libro.id,
      titulo: libro.titulo,
      autor: libro.autor,
      precio: libro.precio,
      imagen: libro.imagen,
      cantidad: cantidad
    };
    setCarrito(carrito.concat(item));
    alert('libro agregado al carrito!');
  }

  // funcion para vaciar carrito
  function vaciarCarrito() {
    setCarrito([]);
  }

  // funcion para realizar compra
  function realizarCompra() {
    if (carrito.length === 0) {
      alert('el carrito esta vacio');
      return;
    }

    // calcular total
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
      total = total + (carrito[i].precio * carrito[i].cantidad);
    }

    // crear pedido
    let nuevoPedido = {
      id: Date.now(),
      fecha: new Date().toLocaleDateString(),
      cliente: usuarioActual ? usuarioActual.nombre : 'invitado',
      productos: carrito,
      total: total,
      estado: 'nueva orden'
    };

    setPedidos(pedidos.concat(nuevoPedido));
    setCarrito([]);
    alert('compra realizada con exito! tu pedido ha sido registrado');
    navigate('/');
  }

  // funcion para iniciar sesion
  function iniciarSesion(usuario) {
    setUsuarioActual(usuario);
    navigate('/');
  }

  // funcion para registrar usuario
  function registrarUsuario(nuevoUsuario) {
    setUsuarios(usuarios.concat(nuevoUsuario));
  }

  // funcion para cerrar sesion
  function cerrarSesion() {
    setUsuarioActual(null);
    setCarrito([]);
  }

  // funciones de admin para libros
  function agregarLibro(nuevoLibro) {
    setLibros(libros.concat(nuevoLibro));
  }

  function editarLibro(libroEditado) {
    let nuevosLibros = [];
    for (let i = 0; i < libros.length; i++) {
      if (libros[i].id === libroEditado.id) {
        nuevosLibros.push(libroEditado);
      } else {
        nuevosLibros.push(libros[i]);
      }
    }
    setLibros(nuevosLibros);
  }

  function eliminarLibro(libroId) {
    let nuevosLibros = [];
    for (let i = 0; i < libros.length; i++) {
      if (libros[i].id !== libroId) {
        nuevosLibros.push(libros[i]);
      }
    }
    setLibros(nuevosLibros);
  }

  // funciones de admin para pedidos
  function cambiarEstadoPedido(pedidoId, nuevoEstado) {
    let nuevosPedidos = [];
    for (let i = 0; i < pedidos.length; i++) {
      if (pedidos[i].id === pedidoId) {
        let pedidoActualizado = {
          id: pedidos[i].id,
          fecha: pedidos[i].fecha,
          cliente: pedidos[i].cliente,
          productos: pedidos[i].productos,
          total: pedidos[i].total,
          estado: nuevoEstado
        };
        nuevosPedidos.push(pedidoActualizado);
      } else {
        nuevosPedidos.push(pedidos[i]);
      }
    }
    setPedidos(nuevosPedidos);
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
          <Route path="/" element={<Inicio libros={libros} agregarAlCarrito={agregarAlCarrito} />} />
          <Route path="/catalogo" element={<Catalogo libros={libros} agregarAlCarrito={agregarAlCarrito} />} />
          <Route path="/carrito" element={
            <Carrito 
              carrito={carrito}
              vaciarCarrito={vaciarCarrito}
              realizarCompra={realizarCompra}
              usuarioActual={usuarioActual}
            />
          } />
          <Route path="/login" element={<Login iniciarSesion={iniciarSesion} usuarios={usuarios} />} />
          <Route path="/registro" element={<Registro registrarUsuario={registrarUsuario} />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/admin" element={
            <Admin 
              usuarioActual={usuarioActual}
              libros={libros}
              pedidos={pedidos}
              agregarLibro={agregarLibro}
              editarLibro={editarLibro}
              eliminarLibro={eliminarLibro}
              cambiarEstadoPedido={cambiarEstadoPedido}
            />
          } />
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
