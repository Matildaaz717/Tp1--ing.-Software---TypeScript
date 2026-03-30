import { Contenido } from "./contenido";
import { IReproductorMusica } from "./interfaces";

export class Album extends Contenido implements IReproductorMusica {
    public reproducir(): string {
        this.enReproduccion = true;
        return `Reproduciendo album: ${this.titulo} de ${this.artista}`;
    }

    public pausar(): string {
        this.enReproduccion = false;
        return `Album pausado: ${this.titulo}`;
    }

    public detener(): string {
        this.enReproduccion = false;
        return `Album detenido: ${this.titulo}`;
    }

    public avanzar(): string {
        return `Siguiente canción en: ${this.titulo}`;
    }
       public mostrarInfo(): string {
        return `Album: ${this.titulo} | Artista: ${this.artista} | Duracion: ${this.duracion} minutos`;
    } //
}
