export enum Nivel {
    "Informativa",
    "Urgente",
    "Bloqueante"
}

// Interface sirve para definir la firma y los puntos necesarios a implementar por quiern la use

export interface ITarea {
    titulo: string,
    descripcion?: string,
    completada: boolean | undefined,
    urgencia?: Nivel,
    resumen: () => string
}