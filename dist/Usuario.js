"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsuarioService {
    usuarios = [];
    nextId = 1;
    crear(datosUsuario) {
        const nuevoUsuario = {
            id: this.nextId++,
            nombre: datosUsuario.nombre,
            correo: datosUsuario.correo,
            activo: true
        };
        this.usuarios.push(nuevoUsuario);
        return nuevoUsuario;
    }
    desactivar(id) {
        const usuario = this.usuarios.find(u => u.id === id);
        if (usuario) {
            usuario.activo = false;
            return true;
        }
        return false;
    }
    listarActivos() {
        return this.usuarios.filter(u => u.activo === true);
    }
}
const gestor = new UsuarioService();
gestor.crear({ nombre: "Mario", correo: "mario@mail.com" });
gestor.crear({ nombre: "Natalia", correo: "natalia@mail.com" });
gestor.desactivar(1);
console.log(gestor.listarActivos());
//# sourceMappingURL=Usuario.js.map