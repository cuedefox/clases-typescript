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

