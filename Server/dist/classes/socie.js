"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Socie = exports.Tutor = void 0;
class Tutor {
    constructor(nombre, apellido, vinculo, telefono, documento, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.vinculo = vinculo;
        this.telefono = telefono;
        this.documento = documento;
        this.edad = edad;
    }
}
exports.Tutor = Tutor;
class Socie {
    constructor(nombre, apellido, fechaDeNacimiento, documento, pronombre, escuela, carrera, telefono, redes, email) {
        this.tutor = Tutor;
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
    }
}
exports.Socie = Socie;
