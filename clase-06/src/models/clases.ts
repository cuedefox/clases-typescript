import { ITarea, Nivel } from "./interfaces/itarea.interface";

export class Curso {
    constructor(nombre: string, horas: number) {
        this.nombre = nombre;
        this.horas = horas;
    }
    nombre: string;
    horas: number;
}

export class Estudiante {
    constructor(nombre: string, cursos: Curso[], apellidos?: string) {
        this.nombre = nombre;
        this.cursos = cursos;
        this.apellidos = apellidos? apellidos : undefined;
    }
    nombre: string;
    cursos: Curso[];
    apellidos?: string;

    private ID: number = 46267557;

    get horasEstudiadas(): number {
        let horasEstudiadas: number = 0;
        this.cursos.forEach((curso) => {
            horasEstudiadas += curso.horas;
        })
        return horasEstudiadas;
    }
    set id_estudiante(id: number) {
        this.ID = id;
    }
}

export class Persona {
    constructor(nombre: string, apellido: string, edad: number) {
        this.nombre =nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    nombre: string;
    apellido: string;
    edad: number;

    saludar(): void {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`);
    }
}

export class Empleado extends Persona {
    constructor(nombre: string, apellido: string, edad: number, sueldo: number) {
        super(nombre, apellido, edad);
        this.sueldo = sueldo;
    }
    sueldo: number;
    saludar(): void {
        super.saludar();
        console.log(`Y mi sueldo es de ${this.sueldo}`);
    }
}

export class Jefe extends Persona {
    constructor(nombre: string, apellido: string, edad: number) {
        super(nombre, apellido, edad);
    }
    empleados: Empleado[] = [];
    saludar(): void {
        super.saludar();
        console.log(`Y tengo ${this.empleados.length} empleados`);
    }
}

export class Programar implements ITarea {
    constructor(titulo: string, descricpion: string, completada: boolean, urgencia: Nivel) {
        this.titulo = titulo;
        this.descripcion = descricpion;
        this.completada = completada;
        this.urgencia = urgencia;
    }
    titulo: string;
    descripcion?: string | undefined;
    completada: boolean | undefined;
    urgencia?: Nivel | undefined;
    resumen = () => {
        return `Tarea de programacion ${this.titulo} estado: ${this.completada}`;
    }
}