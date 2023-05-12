"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log("Hi Typescript by Rodrigo Benjamín Vergara");
// tipos primitivos: string, number, boolean, void, null, undefined
let nombre = 'Rodrigo Vergara';
console.log(`Hi ${nombre}`);
const PI = 3.1416;
console.log(`pi is ${PI}`);
let numeros = 1234; // any permite cualquier tipo
let error = false;
let listaTareas = ["typescript", "java", "C#"];
let valores = [false, 115, "hola"];
// enum guarda valores, si no se especifica los valores iran de 0 incremental
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
// Funciones
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
let empleado1 = {
    nombre: "Rodrigo",
    apellido: "Vergara",
    edad: 21
};
const mostrarEmpleado = (empleado) => `${empleado.nombre} tiene ${empleado.edad} años`;
mostrarEmpleado(empleado1);
const datosEmpleado = (empleado) => {
    if (empleado.edad > 70) {
        return `Empleado ${empleado.nombre} esta en edad de jubilarse`;
    }
    else {
        return `Empleado ${empleado.nombre} esta en edad laboral`;
    }
};
datosEmpleado(empleado1);
const obtenerSalario = (empleado, cobrar) => {
    if (empleado.edad > 70) {
        return;
    }
    else {
        cobrar();
    }
};
const cobrarEmpleado = (empleado) => {
    console.log(`${empleado.nombre} cobra su salario`);
};
obtenerSalario(empleado1, () => 'Cobrar');
// Async
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
//worker
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
// sobrecarga de funciones 
function mostrarError(error) {
    console.log(`Error: ${error}`);
}
// Persistencia de datos (LocalStorage, SessionStorage, Cookies)
//LocalStorage
function guardarLocalStorage() {
    localStorage.set("nombre", "Rodrigo");
}
function leerLocalStorage() {
    let nombre = localStorage.get("nombre");
}
