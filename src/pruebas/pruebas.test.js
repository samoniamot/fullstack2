// pruebas unitarias basicas
import { describe, it, expect } from 'vitest';

// datos de prueba
const libros = [
  { id: 1, titulo: 'el principito', autor: 'antoine', precio: 12990, stock: 100 },
  { id: 2, titulo: 'cien anos', autor: 'gabriel', precio: 15990, stock: 50 }
];

const usuarios = [
  { id: 1, nombre: 'admin', correo: 'admin@tienda.com', contrasena: 'admin123', tipo: 'admin' },
  { id: 2, nombre: 'cliente', correo: 'cliente@tienda.com', contrasena: 'cliente123', tipo: 'cliente' }
];

// prueba 1: verificar que existen libros
describe('pruebas de libros', function() {
  it('debe tener libros en el array', function() {
    expect(libros.length).toBeGreaterThan(0);
  });

  // prueba 2: cada libro debe tener id
  it('cada libro debe tener un id', function() {
    for (let i = 0; i < libros.length; i++) {
      expect(libros[i].id).toBeDefined();
    }
  });

  // prueba 3: cada libro debe tener precio
  it('cada libro debe tener precio', function() {
    for (let i = 0; i < libros.length; i++) {
      expect(libros[i].precio).toBeGreaterThan(0);
    }
  });

  // prueba 4: cada libro debe tener stock
  it('cada libro debe tener stock', function() {
    for (let i = 0; i < libros.length; i++) {
      expect(libros[i].stock).toBeGreaterThanOrEqual(0);
    }
  });
});

// pruebas de usuarios
describe('pruebas de usuarios', function() {
  // prueba 5: debe existir un admin
  it('debe existir un usuario admin', function() {
    let hayAdmin = false;
    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].tipo === 'admin') {
        hayAdmin = true;
      }
    }
    expect(hayAdmin).toBe(true);
  });

  // prueba 6: cada usuario debe tener correo
  it('cada usuario debe tener correo', function() {
    for (let i = 0; i < usuarios.length; i++) {
      expect(usuarios[i].correo).toBeDefined();
    }
  });

  // prueba 7: cada usuario debe tener contrasena
  it('cada usuario debe tener contrasena', function() {
    for (let i = 0; i < usuarios.length; i++) {
      expect(usuarios[i].contrasena).toBeDefined();
    }
  });
});

// pruebas de validacion
describe('pruebas de validacion', function() {
  // prueba 8: validar correo con @
  it('el correo debe contener @', function() {
    let correo = 'test@ejemplo.com';
    expect(correo.indexOf('@')).toBeGreaterThan(-1);
  });

  // prueba 9: validar longitud de contrasena
  it('la contrasena debe tener minimo 6 caracteres', function() {
    let contrasena = 'admin123';
    expect(contrasena.length).toBeGreaterThanOrEqual(6);
  });

  // prueba 10: validar que precio sea numero
  it('el precio debe ser un numero', function() {
    let precio = 12990;
    expect(typeof precio).toBe('number');
  });
});
