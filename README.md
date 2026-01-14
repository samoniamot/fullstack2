Proyecto LIBRERIA ANTARTICA

Tienda online de Libros basada en: html5, css y javascript puro.

paginas principales:


-inicio: muestra un banner principal con fondo y boton con algunos libros destacados y información sobre envío, pago y garantía
-catalogo: lista completa de 8 libros disponibles con imagen, título, autor y precio
-carrito: muestra los libros agregados al carrito con la opción de modificar cantidades
-contacto: formulario para que los usuarios se comuniquen
-login: sistema de autenticación para usuarios cliente y administrador



usuarios
el proyecto tiene dos tipos de usuario hardcodeados:

usuario cliente:

correo: cliente@tienda.com
contraseña: cliente123


usuario administrador:
correo: admin@tienda.com
contraseña: admin123



Aspectos tecnicos:

-agregar libros al carrito con selector de cantidad
-carrito persiste en la sesión del usuario
-validación basica de login con mensajes de error
-interfaz responsive con bootstrap
-8 libros diferentes con imágenes locales


Estructura visual:
tienda-libros/
├── src/
│   ├── componentes/
│   │   ├── Encabezado.jsx (header con navegación y carrito)
│   │   ├── TarjetaProducto.jsx (componente reutilizable de producto)
│   │   └── PiePagina.jsx (footer)
│   ├── paginas/
│   │   ├── Inicio.jsx (homepage con banner)
│   │   ├── Catalogo.jsx (lista de libros)
│   │   ├── Carrito.jsx (resumen del carrito)
│   │   ├── Contacto.jsx (formulario)
│   │   ├── Login.jsx (autenticación)
│   │   └── Admin.jsx (panel solo para admins)
│   ├── datos/
│   │   ├── libros.js (array con 8 libros hardcodeados)
│   │   └── usuarios.js (usuarios demo)
│   ├── estilos/
│   │   └── estilos.css (estilos personalizados)
│   ├── App.jsx (componente principal)
│   └── main.jsx (punto de entrada)
├── public/
│   ├── libro1.webp a libro8.webp (imágenes de libros)
│   └── logo_app.webp (logo de la tienda)
└── package.json

Stack tecnologico:
React
Vite 
Bootstrap
React-router
Javascript 


NOTAS:
Todos los datos están hardcodeados (sin base de datos)
sin backend, toda la lógica está en el frontend
carrito almacenado en estado de react
validaciones básicas de login con javascript puro