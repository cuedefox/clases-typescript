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