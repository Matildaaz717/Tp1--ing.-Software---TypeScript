"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contenido = void 0;
class Contenido {
    constructor(titulo, artista, duracion) {
        this.titulo = titulo;
        this.artista = artista;
        this.duracion = duracion;
        this.esFavorito = false;
        this.enReproduccion = false;
    }
    mostrarInfo() {
        return `Titulo: ${this.titulo} | Artista: ${this.artista} | Duracion: ${this.duracion} minutos`;
    }
    marcarComoFavorito() {
        this.esFavorito = true;
        return `${this.titulo} se marcó como favorito`;
    }
    desmarcarFavorito() {
        this.esFavorito = false;
    }
    isFavorito() {
        return this.esFavorito;
    }
}
exports.Contenido = Contenido;
