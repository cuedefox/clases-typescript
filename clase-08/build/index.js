"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookies_utils_1 = require("cookies-utils");
const clases_1 = require("./models/clases");
const clases_2 = require("./models/clases");
const cursos_mock_1 = require("./mock/cursos.mock");
const ITarea_interface_1 = require("./models/interfaces/ITarea.interface");
console.log("Hi Typescript by Rodrigo Benjamín Vergara");
// tipos primitivos: string, number, boolean, void, null, undefined /////////////////////////////
let nombre = 'Rodrigo Vergara';
console.log(`Hi ${nombre}`);
const PI = 3.1416;
console.log(`pi is ${PI}`);
let numeros = 1234; // any permite cualquier tipo
let error = false;
let listaTareas = ["typescript", "java", "C#"];
let valores = [false, 115, "hola"];
// enum guarda valores, si no se especifica los valores iran de 0 incremental //////////////////////
var estados;
(function (estados) {
    estados[estados["Aprobado"] = 0] = "Aprobado";
    estados[estados["Rechazado"] = 1] = "Rechazado";
    estados[estados["Pendiente"] = 2] = "Pendiente";
})(estados || (estados = {}));
var puestoCarrera;
(function (puestoCarrera) {
    puestoCarrera[puestoCarrera["primero"] = 1] = "primero";
    puestoCarrera[puestoCarrera["segundo"] = 2] = "segundo";
    puestoCarrera[puestoCarrera["tercero"] = 3] = "tercero";
})(puestoCarrera || (puestoCarrera = {}));
let estadoTarea = estados.Aprobado;
let puestoCorredor = puestoCarrera.segundo;
let tarea1 = {
    nombre: "estudiar",
    estado: estados.Pendiente,
    importancia: 8
};
let coche = {
    precio: 15674,
    nombre: "Ford",
    anio: 2023
};
console.log(`Coche: ${coche.nombre} precio: ${coche.precio}$`);
// Funciones //////////////////////////////////////////////////////////////////////////////
function saludar() {
    let nombre = "Rodorigo";
    console.log(`Hola ${nombre}`);
}
saludar();
function saludarPersona(nombre) {
    console.log(`Hola ${nombre}`);
}
saludarPersona("Lucy");
function despedirPersona(nombre = "Roberto") {
    console.log(`Adios ${nombre}`);
}
despedirPersona();
despedirPersona("Jose");
function despedirPersonaOpcional(nombre) {
    nombre ? console.log(`Adios ${nombre}`) : console.log("Adios amig@");
}
despedirPersonaOpcional();
despedirPersonaOpcional("Robert");
function variosParams(nombre, apellidos, edad = 18) {
    apellidos ? console.log(`${nombre} ${apellidos} tiene ${edad} años`) : console.log(`${nombre} tiene ${edad} años`);
}
variosParams("Luna");
variosParams("Luna", "vergara");
variosParams("Luna", undefined, 16);
function ejVariosTipos(a) {
    if (typeof a === 'string') {
        console.log("a es un string");
    }
    else if (typeof a === 'number') {
        console.log("a es un numero");
    }
    else {
        console.log("a no es un string ni number");
    }
}
ejVariosTipos("Hola");
ejVariosTipos(115);
/**
 *
 * @param nombre Nombre persona
 * @param apellidos Apellido persona
 * @returns Nombre completo
 */
function ejReturn(nombre, apellidos) {
    return `${nombre} ${apellidos}`;
}
const nombreCompleto = ejReturn("Rodrigo", "Vergara");
console.log(nombreCompleto);
function ejMultParams(...nombres) {
    nombres.forEach((nombre) => {
        console.log(nombre);
    });
}
ejMultParams("Lol", "Lal", "Lel", "Lil", "Lul");
function ejParamsList(nombres) {
    nombres.forEach((nombre) => {
        console.log(nombre);
    });
}
const lista = ["Lol", "Lal", "Lel"];
ejParamsList(lista);
let trabajador1 = {
    nombre: "Rodrigo",
    apellido: "Vergara",
    edad: 21
};
const mostrarTrabajador = (trabajador) => `${trabajador.nombre} tiene ${trabajador.edad} años`;
mostrarTrabajador(trabajador1);
const datosTrabajador = (trabajador) => {
    if (trabajador.edad > 70) {
        return `Trabajador${trabajador.nombre} esta en edad de jubilarse`;
    }
    else {
        return `Trabajador${trabajador.nombre} esta en edad laboral`;
    }
};
datosTrabajador(trabajador1);
const obtenerSalario = (trabajador, cobrar) => {
    if (trabajador.edad > 70) {
        return;
    }
    else {
        cobrar();
    }
};
const cobrarTrabajador = (trabajador) => {
    console.log(`${trabajador.nombre} cobra su salario`);
};
obtenerSalario(trabajador1, () => 'Cobrar');
// Async ////////////////////////////////////////////////////////////////////////////////
function ejAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log("Tarea a completar antes de seguir con la secuencia de instrucciones");
        console.log("Tarea completada");
        return "Completado";
    });
}
ejAsync().then((respuesta) => {
    console.log("respuesta", respuesta);
}).catch((error) => {
    console.log("Error", error);
}).finally(() => "Fin");
function* ejGenerator() {
    let index = 0;
    while (index < 5) {
        yield index++;
    }
}
let generadora = ejGenerator();
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
//worker ///////////////////////////////////////////////////////////////////////////////////
function* watcher(valor) {
    yield valor;
    yield* worker(valor);
    yield valor + 10;
}
function* worker(valor) {
    yield valor + 1;
    yield valor + 2;
    yield valor + 3;
}
let generatorSaga = watcher(0);
console.log(generatorSaga.next().value); //0
console.log(generatorSaga.next().value); //1
console.log(generatorSaga.next().value); //2
console.log(generatorSaga.next().value); //3
console.log(generatorSaga.next().value); //4
// sobrecarga de funciones //////////////////////////////////////////////////////////////////
function mostrarError(error) {
    console.log(`Error: ${error}`);
}
// Persistencia de datos (LocalStorage, SessionStorage, Cookies) ///////////////////////////////
//LocalStorage
function guardarLocalStorage() {
    localStorage.set("nombre", "Rodrigo");
}
function leerLocalStorage() {
    let nombre = localStorage.get("nombre");
}
//cookies
const cookieOptions = {
    name: "usuario",
    value: "Rodrigo",
    maxAge: 10 * 60,
    expires: new Date(2099, 10, 1),
    path: "/"
};
// Setear cookie
(0, cookies_utils_1.setCookie)(cookieOptions);
// Leer cookie
let cookueValue = (0, cookies_utils_1.getCookieValue)("usuario");
// Eliminar
(0, cookies_utils_1.deleteCookie)("usuario");
// Eliminar todas
(0, cookies_utils_1.deleteAllCookies)();
// Clase Temporizador 
class Temporizador {
    empezar() {
        setTimeout(() => {
            if (!this.terminar)
                return;
            this.terminar(Date.now());
        }, 10000);
    }
}
const miTemporizador = new Temporizador();
// definimosla funcion del callback a ejecutar cuando termine el tiempo
miTemporizador.terminar = (tiempo) => {
    console.log(`Evento terminado: ${tiempo}`);
};
// Lanzamos el temporizador
miTemporizador.empezar();
// setInterval(() => console.log("tic"), 1000);
delete miTemporizador.terminar;
// Clases //////////////////////////////////////////////////////////////////////////
const listaCursos = cursos_mock_1.LISTA_CURSOS;
const lucia = new clases_2.Estudiante("Lucy", listaCursos, "Vergara");
console.log(`${lucia.nombre} estudia:`);
lucia.cursos.forEach((curso) => {
    console.log(`${curso.nombre} - ${curso.horas} horas`);
});
const cursoAngular = new clases_1.Curso("Angular", 40);
lucia.cursos.push(cursoAngular);
lucia.horasEstudiadas;
lucia.id_estudiante = 123;
// Saber instancia de un objeto / variable ////////////////////////////////////////////////////////
// typeof devuelve tipo, instanceof devuelve si es una instancia de una clase
let birthday = new Date(2001, 7, 10);
if (birthday instanceof Date) {
    console.log("instancia de Date");
}
if (lucia instanceof clases_2.Estudiante) {
    console.log("Lucia es una instancia de Estudiante");
}
// Herencia y polimorfismo ////////////////////////////////////////////////////////////////////
let empleado1 = new clases_1.Empleado("Rodrigo", "Vergara", 21, 200);
let empleado2 = new clases_1.Empleado("Luna", "Vergara", 16, 300);
let empleado3 = new clases_1.Empleado("Carlos", "Vergara", 44, 2000);
empleado1.saludar();
let jefe = new clases_1.Jefe("Don", "Omar", 66);
// Se heredan propiedades de la clase de la que se extiende
jefe.empleados.push(empleado1, empleado2, empleado3);
jefe.empleados.forEach((empleado) => {
    empleado.saludar();
});
jefe.saludar();
// Uso de interfaces /////////////////////////////////////////////////////////////////////////////
let programar = {
    titulo: "Programar en typescript",
    descripcion: "practicar para aprender a desarrollar con TS",
    completada: false,
    urgencia: ITarea_interface_1.Nivel.Urgente,
    resumen: function () {
        return `${this.titulo} - ${this.completada} - Nivel: ${this.urgencia}`;
    }
};
console.log(programar.resumen());
// tarea de programacion (implementa ITarea)
let programarTS = new clases_1.Programar("Typescript", "Tarea de programacion en TS", false, ITarea_interface_1.Nivel.Bloqueante);
console.log(programarTS.resumen());
// Decoradores experimentales --> @ ////////////////////////////////////////////
// - clases
// - parametros
// - metodos
// - propiedades
function Override(label) {
    return function (target, key) {
        Object.defineProperty(target, key, {
            configurable: false,
            get: () => label
        });
    };
}
class PruebaDecorador {
    constructor() {
        this.nombre = "Rodrigo";
    }
}
__decorate([
    Override('Prueba') // llama a la funcion override
    ,
    __metadata("design:type", String)
], PruebaDecorador.prototype, "nombre", void 0);
let prueba = new PruebaDecorador();
console.log(prueba.nombre); // "Prueba" siempre va a ser devuelto a traves del get
// Otra funcion decoradora
function soloLectura(target, key) {
    Object.defineProperty(target, key, {
        writable: false
    });
}
class PruebaSoloLectura {
    constructor() {
        this.nombre = 'Rodrigo';
    }
}
__decorate([
    soloLectura,
    __metadata("design:type", String)
], PruebaSoloLectura.prototype, "nombre", void 0);
let pruebaLectura = new PruebaSoloLectura();
pruebaLectura.nombre = "Ramon";
// console.log(pruebaLectura.nombre); // ==> undefined, ya que no se le puede dar valor (es solo lectura)
// Decorador para parametros de un metodo
function mostrarPosicion(target, propertyKey, parameterIndex) {
    console.log('posicion', parameterIndex);
}
class PruebaMetodoDecorador {
    prueba(a, b) {
        console.log(b);
    }
}
__decorate([
    __param(1, mostrarPosicion),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", void 0)
], PruebaMetodoDecorador.prototype, "prueba", null);
let PruebaDecoradorEnParam = new PruebaMetodoDecorador().prueba('Hola', false);
// clase 7 patrones de diseño
/*
1. patrones creacionales
- mecanismos de creacion de objetos
- reutilizacion del codigo
- ofrecer flexibilidad al codigo

2. patrones estructurales
- eficiencia y flexibilidad de la estructura a la hora de definir clases y objetos.

3. patrones de comportamiento
- centrados en la asignacion efectiva de responsabilidad entre objetos
- comunicacion efectiva entre objetos
*/
// Patrones Creacionales
const miPrimerSingleton = Singleton.getInstance();
const miSegundoSingleton = Singleton.getInstance();
if (miPrimerSingleton === miSegundoSingleton) {
    console.log('Singleton funciona correctamente, ambas variables contienen la misma instancia');
    miPrimerSingleton.someBussinesLogic();
    miSegundoSingleton.someBussinesLogic();
}
else {
    console.log('Ambas variables contienen distintas instancias');
}
// clase 8
//# sourceMappingURL=index.js.map