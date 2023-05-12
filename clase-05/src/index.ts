import {deleteAllCookies, deleteCookie, getCookieValue, setCookie} from "cookies-utils";
import {Curso} from "./models/clases";
import {Estudiante} from "./models/clases";
import { LISTA_CURSOS } from "./mock/cursos.mock";

console.log("Hi Typescript by Rodrigo Benjamín Vergara");

// tipos primitivos: string, number, boolean, void, null, undefined

let nombre: string = 'Rodrigo Vergara';
console.log(`Hi ${nombre}`);

const PI: number = 3.1416;
console.log(`pi is ${PI}`);

let numeros: any = 1234; // any permite cualquier tipo

let error: boolean = false;

let listaTareas: string[] = ["typescript", "java", "C#"];

let valores: (string | number | boolean)[] = [false, 115, "hola"];

// enum guarda valores, si no se especifica los valores iran de 0 incremental

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

// interface

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

// tipos propios, a diferencia de las interfaces es cuando se requiere algo mas complejo
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

// Funciones
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

// Arrow
type Empleado = {
    nombre: string,
    apellido: string,
    edad: number
}

let empleado1 = {
    nombre: "Rodrigo",
    apellido: "Vergara",
    edad: 21
}

const mostrarEmpleado = (empleado: Empleado): string => `${empleado.nombre} tiene ${empleado.edad} años`;

mostrarEmpleado(empleado1);

const datosEmpleado = (empleado: Empleado): string => {
    if(empleado.edad > 70) {
        return `Empleado ${empleado.nombre} esta en edad de jubilarse`;
    }else {
        return `Empleado ${empleado.nombre} esta en edad laboral`;
    }
}

datosEmpleado(empleado1);

const obtenerSalario = (empleado: Empleado, cobrar: () => string) => {
    if(empleado.edad > 70) {
        return
    }else {
        cobrar();
    }
}

const cobrarEmpleado = (empleado: Empleado) => {
    console.log(`${empleado.nombre} cobra su salario`)
}

obtenerSalario(empleado1, () => 'Cobrar');

// Async
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

//worker

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

// sobrecarga de funciones 
function mostrarError(error: String | number): void {
    console.log(`Error: ${error}`);
}

// Persistencia de datos (LocalStorage, SessionStorage, Cookies)

//LocalStorage
/*function guardarLocalStorage(): void {
    localStorage.set("nombre", "Rodrigo");
}

function leerLocalStorage(): void {
    let nombre: string = localStorage.get("nombre");
}*/

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

// Clases
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

// Saber instancia de un objeto / variable
// typeof devuelve tipo, instanceof devuelve si es una instancai de una variable