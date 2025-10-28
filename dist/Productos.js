"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Producto {
    id;
    nombre;
    precio;
    stock;
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}
class ProductoElectronico extends Producto {
    garantiaMeses;
    constructor(id, nombre, precio, stock, garantia) {
        super(id, nombre, precio, stock);
        this.garantiaMeses = garantia;
    }
}
class Inventario {
    productos = [];
    nextId = 1;
    agregarProducto(nombre, precio, stock, esElectronico = false, garantia = 0) {
        let nuevoProducto;
        if (esElectronico) {
            nuevoProducto = new ProductoElectronico(this.nextId++, nombre, precio, stock, garantia);
        }
        else {
            nuevoProducto = new Producto(this.nextId++, nombre, precio, stock);
        }
        this.productos.push(nuevoProducto);
        return nuevoProducto;
    }
    buscarPorNombre(nombreBusqueda) {
        return this.productos.filter(p => p.nombre.toLowerCase().includes(nombreBusqueda.toLowerCase()));
    }
    listarTodos() {
        return this.productos;
    }
    calcularValorTotalInventario() {
        return this.productos.reduce((total, p) => total + (p.precio * p.stock), 0);
    }
}
const inv = new Inventario();
inv.agregarProducto('Mesa', 50, 20);
inv.agregarProducto('Reloj', 150, 10, true, 6);
console.log(inv.buscarPorNombre('reloj'));
//# sourceMappingURL=Productos.js.map