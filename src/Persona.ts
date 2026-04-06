
export abstract class Persona {
    nombre: string;

    constructor(nombre: string){
        this.nombre = nombre;
    }

    abstract mostrarDatos(): string;
}