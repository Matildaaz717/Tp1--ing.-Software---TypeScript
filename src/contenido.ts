import {IMarcarFavorito } from "./interfaces";
export abstract class Contenido implements IMarcarFavorito {
    protected esFavorito: boolean = false;
    protected enReproduccion: boolean = false;

    constructor( // constructor para inicializar las propiedades de la clase contenido
        protected titulo: string,
        protected artista: string,
        protected duracion: number
    ) {}

    public mostrarInfo(): string { //metodo
        return `Titulo: ${this.titulo} | Artista: ${this.artista} | Duracion: ${this.duracion} minutos`;
    }

    public abstract reproducir(): string;

    public marcarComoFavorito(): string { //x2
        this.esFavorito = true;
        return `${this.titulo} se marcó como favorito`;
    }

    public desmarcarFavorito(): void { //x3
        this.esFavorito = false;
    }

    public isFavorito(): boolean { //x4
        return this.esFavorito;
    }
}