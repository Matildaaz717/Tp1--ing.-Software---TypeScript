import { Contenido } from "./contenido";
import { IReproductorMusica } from "./interfaces";

export class Cancion extends Contenido implements IReproductorMusica { //hereda de contenido y implementa la interfaz de reproductor de musica
    public reproducir(): string { 
        this.enReproduccion = true;
        return `Reproduciendo: ${this.titulo} de ${this.artista}`;
    }

    public pausar(): string { 
        this.enReproduccion = false;
        return `Cancion pausada: ${this.titulo}`;
    }

    public detener(): string {
        this.enReproduccion = false;
        return `Cancion detenida: ${this.titulo}`;
    }

    public avanzar(): string {
        return `Avanzando en: ${this.titulo}`;
    }
    public mostrarInfo(): string {
        return `Cancion: ${this.titulo} | Artista: ${this.artista} | Duracion: ${this.duracion} minutos`;
    }
}