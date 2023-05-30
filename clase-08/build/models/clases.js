"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Programar = exports.Jefe = exports.Empleado = exports.Persona = exports.Estudiante = exports.Curso = void 0;
class Curso {
    constructor(nombre, horas) {
        this.nombre = nombre;
        this.horas = horas;
    }
}
exports.Curso = Curso;
class Estudiante {
    constructor(nombre, cursos, apellidos) {
        this.ID = 46267557;
        this.nombre = nombre;
        this.cursos = cursos;
        this.apellidos = apellidos ? apellidos : undefined;
    }
    get horasEstudiadas() {
        let horasEstudiadas = 0;
        this.cursos.forEach((curso) => {
            horasEstudiadas += curso.horas;
        });
        return horasEstudiadas;
    }
    set id_estudiante(id) {
        this.ID = id;
    }
}
exports.Estudiante = Estudiante;
class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`);
    }
}
exports.Persona = Persona;
class Empleado extends Persona {
    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this.sueldo = sueldo;
    }
    saludar() {
        super.saludar();
        console.log(`Y mi sueldo es de ${this.sueldo}`);
    }
}
exports.Empleado = Empleado;
class Jefe extends Persona {
    constructor(nombre, apellido, edad) {
        super(nombre, apellido, edad);
        this.empleados = [];
    }
    saludar() {
        super.saludar();
        console.log(`Y tengo ${this.empleados.length} empleados`);
    }
}
exports.Jefe = Jefe;
class Programar {
    constructor(titulo, descricpion, completada, urgencia) {
        this.resumen = () => {
            return `Tarea de programacion ${this.titulo} estado: ${this.completada}`;
        };
        this.titulo = titulo;
        this.descripcion = descricpion;
        this.completada = completada;
        this.urgencia = urgencia;
    }
}
exports.Programar = Programar;
//# sourceMappingURL=clases.js.map