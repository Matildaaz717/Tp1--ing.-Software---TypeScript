"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Album = void 0;
const contenido_1 = require("./contenido");
class Album extends contenido_1.Contenido {
    reproducir() {
        this.enReproduccion = true;
        return `Reproduciendo album: ${this.titulo} de ${this.artista}`;
    }
    pausar() {
        this.enReproduccion = false;
        return `Album pausado: ${this.titulo}`;
    }
    detener() {
        this.enReproduccion = false;
        return `Album detenido: ${this.titulo}`;
    }
    avanzar() {
        return `Siguiente canción en: ${this.titulo}`;
    }
    mostrarInfo() {
        return `Album: ${this.titulo} | Artista: ${this.artista} | Duracion: ${this.duracion} minutos`;
    }
}
exports.Album = Album;
