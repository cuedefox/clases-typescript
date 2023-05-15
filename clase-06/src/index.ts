import {deleteAllCookies, deleteCookie, getCookieValue, setCookie} from "cookies-utils";
import {Curso, Persona, Empleado, Jefe, Programar} from "./models/clases";
import {Estudiante} from "./models/clases";
import { LISTA_CURSOS } from "./mock/cursos.mock";
import { Nivel, ITarea } from "./models/interfaces/itarea.interface";

console.log("Hi Typescript by Rodrigo Benjamín Vergara");

// tipos primitivos: string, number, boolean, void, null, undefined /////////////////////////////

let nombre: string = 'Rodrigo Vergara';
console.log(`Hi ${nombre}`);

const PI: number = 3.1416;
console.log(`pi is ${PI}`);

let numeros: any = 1234; // any permite cualquier tipo

let error: boolean = false;

let listaTareas: string[] = ["typescript", "java", "C#"];

let valores: (string | number | boolean)[] = [false, 115, "hola"];

// enum guarda valores, si no se especifica los valores iran de 0 incremental //////////////////////

enum estados {
    "Aprobado",
    "Rechazado",
    "Pendiente"
}

enum puestoCarrera {
    "primero" = 1,
    "segundo",
    "tercero"
}

let estadoTarea: estados = estados.Aprobado;
let puestoCorredor: puestoCarrera = puestoCarrera.segundo;

// interface //////////////////////////////////////////////////////////////////////////////////////

interface Tarea {
    nombre: string,
    estado: estados,
    importancia: number
}

let tarea1: Tarea = {
    nombre: "estudiar",
    estado: estados.Pendiente,
    importancia: 8
}

// tipos propios, a diferencia de las interfaces es cuando se requiere algo mas complejo ///////////
type Producto = {
    precio: number,
    nombre: string,
    anio: number
}

let coche: Producto = {
    precio: 15674,
    nombre: "Ford",
    anio: 2023
}

console.log(`Coche: ${coche.nombre} precio: ${coche.precio}$`);

// Funciones //////////////////////////////////////////////////////////////////////////////
function saludar() {
    let nombre: string = "Rodorigo";
    console.log(`Hola ${nombre}`)
}

saludar();

function saludarPersona(nombre: string) {
    console.log(`Hola ${nombre}`);
}

saludarPersona("Lucy");

function despedirPersona (nombre: string = "Roberto")  {
    console.log(`Adios ${nombre}`);
}

despedirPersona();
despedirPersona("Jose");

function despedirPersonaOpcional(nombre?: string) {
    nombre ? console.log(`Adios ${nombre}`) : console.log("Adios amig@");
}

despedirPersonaOpcional();
despedirPersonaOpcional("Robert")

function variosParams(nombre: string, apellidos?: string, edad: number = 18) {
    apellidos ? console.log(`${nombre} ${apellidos} tiene ${edad} años`) : console.log(`${nombre} tiene ${edad} años`)
}

variosParams("Luna");
variosParams("Luna", "vergara");
variosParams("Luna", undefined, 16);

function ejVariosTipos(a: string | number) {
    if(typeof a === 'string') {
        console.log("a es un string")
    }else if(typeof a === 'number') {
        console.log("a es un numero")
    }else {
        console.log("a no es un string ni number")
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
function ejReturn(nombre: string, apellidos: string): string {
    return `${nombre} ${apellidos}`;
}

const nombreCompleto = ejReturn("Rodrigo", "Vergara");
console.log(nombreCompleto);

function ejMultParams(...nombres: string[]): void {
    nombres.forEach((nombre) => {
        console.log(nombre); 
    })
}

ejMultParams("Lol", "Lal", "Lel", "Lil", "Lul");

function ejParamsList(nombres: string[]): void {
    nombres.forEach((nombre) => {
        console.log(nombre); 
    })
}

const lista: string[] = ["Lol", "Lal", "Lel"];

ejParamsList(lista);

// Arrow ////////////////////////////////////////////////////////////////////////////////////////
type Trabajador = {
    nombre: string,
    apellido: string,
    edad: number
}

let trabajador1 = {
    nombre: "Rodrigo",
    apellido: "Vergara",
    edad: 21
}

const mostrarTrabajador= (trabajador: Trabajador): string => `${trabajador.nombre} tiene ${trabajador.edad} años`;

mostrarTrabajador(trabajador1);

const datosTrabajador= (trabajador: Trabajador): string => {
    if(trabajador.edad > 70) {
        return `Trabajador${trabajador.nombre} esta en edad de jubilarse`;
    }else {
        return `Trabajador${trabajador.nombre} esta en edad laboral`;
    }
}

datosTrabajador(trabajador1);

const obtenerSalario = (trabajador: Trabajador, cobrar: () => string) => {
    if(trabajador.edad > 70) {
        return
    }else {
        cobrar();
    }
}

const cobrarTrabajador= (trabajador: Trabajador) => {
    console.log(`${trabajador.nombre} cobra su salario`)
}

obtenerSalario(trabajador1, () => 'Cobrar');

// Async ////////////////////////////////////////////////////////////////////////////////
async function ejAsync(): Promise<string> {
    await console.log("Tarea a completar antes de seguir con la secuencia de instrucciones");
    console.log("Tarea completada");
    return "Completado";  
}

ejAsync().then((respuesta) => {
    console.log("respuesta", respuesta);
}).catch((error) => {
    console.log("Error", error)
}).finally(() => "Fin");

function* ejGenerator() {
    let index = 0;

    while(index < 5) {
        yield index++;
    }
}

let generadora = ejGenerator();

console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);

//worker ///////////////////////////////////////////////////////////////////////////////////

function* watcher(valor: number) {
    yield valor;
    yield* worker(valor);
    yield valor + 10;
}

function* worker(valor: number) {
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
function mostrarError(error: String | number): void {
    console.log(`Error: ${error}`);
}

// Persistencia de datos (LocalStorage, SessionStorage, Cookies) ///////////////////////////////

//LocalStorage
function guardarLocalStorage(): void {
    localStorage.set("nombre", "Rodrigo");
}

function leerLocalStorage(): void {
    let nombre: string = localStorage.get("nombre");
}

//cookies
const cookieOptions = {
    name: "usuario",
    value: "Rodrigo",
    maxAge: 10*60,
    expires: new Date(2099, 10, 1),
    path: "/"
};
// Setear cookie
setCookie(cookieOptions);
// Leer cookie
let cookueValue = getCookieValue("usuario");
// Eliminar
deleteCookie("usuario");
// Eliminar todas
deleteAllCookies();

// Clase Temporizador 
class Temporizador {
    public terminar?: (tiempo: number) => void;
    public empezar(): void {
        setTimeout(() => {
            if(!this.terminar) return;
            this.terminar(Date.now());
        }, 10000)
    }
}

const miTemporizador = new Temporizador();

// definimosla funcion del callback a ejecutar cuando termine el tiempo
miTemporizador.terminar = (tiempo: number) => {
    console.log(`Evento terminado: ${tiempo}`);
}

// Lanzamos el temporizador
miTemporizador.empezar();

// setInterval(() => console.log("tic"), 1000);

delete miTemporizador.terminar;

// Clases //////////////////////////////////////////////////////////////////////////
const listaCursos: Curso[] = LISTA_CURSOS;

const lucia: Estudiante = new Estudiante("Lucy", listaCursos, "Vergara");

console.log(`${lucia.nombre} estudia:`);
lucia.cursos.forEach((curso) => {
    console.log(`${curso.nombre} - ${curso.horas} horas`);
})

const cursoAngular: Curso = new Curso("Angular", 40);
lucia.cursos.push(cursoAngular);

lucia.horasEstudiadas;
lucia.id_estudiante = 123;

// Saber instancia de un objeto / variable ////////////////////////////////////////////////////////
// typeof devuelve tipo, instanceof devuelve si es una instancia de una clase

let birthday = new Date(2001, 7, 10);

if(birthday instanceof Date) {
    console.log("instancia de Date");
}

if(lucia instanceof Estudiante) {
    console.log("Lucia es una instancia de Estudiante");
}

// Herencia y polimorfismo ////////////////////////////////////////////////////////////////////
let empleado1: Empleado= new Empleado("Rodrigo", "Vergara", 21, 200);
let empleado2: Empleado= new Empleado("Luna", "Vergara", 16, 300);
let empleado3: Empleado= new Empleado("Carlos", "Vergara", 44, 2000);

empleado1.saludar();

let jefe: Jefe = new Jefe("Don", "Omar", 66);

// Se heredan propiedades de la clase de la que se extiende

jefe.empleados.push(empleado1, empleado2, empleado3);

jefe.empleados.forEach((empleado) => {
    empleado.saludar();
})

jefe.saludar();

// Uso de interfaces /////////////////////////////////////////////////////////////////////////////

let programar: ITarea = {
    titulo: "Programar en typescript",
    descripcion: "practicar para aprender a desarrollar con TS",
    completada: false,
    urgencia: Nivel.Urgente,
    resumen: function (): string {
        return `${this.titulo} - ${this.completada} - Nivel: ${this.urgencia}`;
    }
}

console.log(programar.resumen());

// tarea de programacion (implementa ITarea)
let programarTS: Programar = new Programar("Typescript", "Tarea de programacion en TS", false, Nivel.Bloqueante);
console.log(programarTS.resumen());

// Decoradores experimentales --> @ ////////////////////////////////////////////
// - clases
// - parametros
// - metodos
// - propiedades

function Override(label: string) {
    return function(target: any, key: string) {
        Object.defineProperty(target, key, {
            configurable: false,
            get: () => label
        })
    }
}

class PruebaDecorador {
    @Override('Prueba') // llama a la funcion override
    nombre: string = "Rodrigo";
}

let prueba: PruebaDecorador = new PruebaDecorador();
console.log(prueba.nombre); // "Prueba" siempre va a ser devuelto a traves del get

// Otra funcion decoradora
function soloLectura(target: any, key: string) {
    Object.defineProperty(target, key, {
        writable: false
    })
}

class PruebaSoloLectura {
    @soloLectura
    nombre: string = 'Rodrigo';
}

let pruebaLectura: PruebaSoloLectura = new PruebaSoloLectura();
pruebaLectura.nombre = "Ramon";

// console.log(pruebaLectura.nombre); // ==> undefined, ya que no se le puede dar valor (es solo lectura)

// Decorador para parametros de un metodo
function mostrarPosicion(target: any, propertyKey: string, parameterIndex: number) {
    console.log('posicion', parameterIndex);
}

class PruebaMetodoDecorador {
    prueba(a: string, @mostrarPosicion b: boolean){
        console.log(b);
    }
}

let PruebaDecoradorEnParam = new PruebaMetodoDecorador().prueba('Hola', false);