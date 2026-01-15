# Libreria antartica

tienda online de libros hecha con html5, css y javascript. proyecto para la asignatura desarrollo fullstack ii.

## como ejecutar

```bash
npm install
npm run dev
npm run test
```

## paginas principales

- **inicio**: banner con imagen de fondo, libros destacados e info de envio y garantia
- **catalogo**: lista de 8 libros con imagen, titulo, autor, precio y stock
- **carrito**: productos agregados con opcion de confirmar compra
- **contacto**: formulario basico de contacto
- **login**: para entrar como cliente o admin
- **registro**: para crear cuenta nueva
- **admin**: panel para gestionar productos y pedidos (solo admins)

## usuarios de prueba

| tipo | correo | contrasena |
|------|--------|------------|
| cliente | cliente@tienda.com | cliente123 |
| admin | admin@tienda.com | admin123 |

## funcionalidades

### carrito
- agregar libros con selector de cantidad
- ver total de la compra
- confirmar compra (crea un pedido)
- carrito se guarda en localstorage

### sesion de usuario
- login con validacion basica
- registro de usuarios nuevos
- sesion persiste al recargar la pagina
- cierre de sesion limpia carrito

### panel de admin
- ver tabla de productos
- agregar nuevos libros
- editar libros existentes
- eliminar libros
- ver pedidos de clientes
- cambiar estado de pedidos (nueva orden, entregado, cancelada)

## pruebas unitarias

el proyecto tiene 10 pruebas con vitest:

1. debe tener libros en el array
2. cada libro debe tener un id
3. cada libro debe tener precio
4. cada libro debe tener stock
5. debe existir un usuario admin
6. cada usuario debe tener correo
7. cada usuario debe tener contrasena
8. el correo debe contener @
9. la contrasena debe tener minimo 6 caracteres
10. el precio debe ser un numero

para correr las pruebas:
```bash
npm run test
```

## estructura del proyecto

```
tienda-libros/
├── src/
│   ├── componentes/
│   │   ├── Encabezado.jsx
│   │   ├── TarjetaProducto.jsx
│   │   └── PiePagina.jsx
│   ├── paginas/
│   │   ├── Inicio.jsx
│   │   ├── Catalogo.jsx
│   │   ├── Carrito.jsx
│   │   ├── Contacto.jsx
│   │   ├── Login.jsx
│   │   ├── Registro.jsx
│   │   └── Admin.jsx
│   ├── datos/
│   │   ├── libros.js
│   │   └── usuarios.js
│   ├── estilos/
│   │   └── estilos.css
│   ├── pruebas/
│   │   └── pruebas.test.js
│   ├── App.jsx
│   └── main.jsx
├── public/
│   ├── libro1.webp a libro8.webp
│   ├── logo_app.webp
│   └── banner-fondo.jpg
└── package.json
```

## tecnologias

- react 19
- vite 7
- bootstrap 5
- react-router 7
- vitest (testing)

## notas

- todos los datos estan hardcodeados sin base de datos
- no hay backend, todo es frontend
- carrito y sesion se guardan en localstorage
- validaciones basicas con javascript puro
