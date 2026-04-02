"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cancion = void 0;
const contenido_1 = require("./contenido");
class Cancion extends contenido_1.Contenido {
    reproducir() {
        this.enReproduccion = true;
        return `Reproduciendo: ${this.titulo} de ${this.artista}`;
    }
    pausar() {
        this.enReproduccion = false;
        return `Pausada: ${this.titulo}`;
    }
    detener() {
        this.enReproduccion = false;
        return `Detenida: ${this.titulo}`;
    }
    avanzar() {
        return `Avanzando en: ${this.titulo}`;
    }
    mostrarInfo() {
        return `Cancion: ${this.titulo} | Artista: ${this.artista} | Duracion: ${this.duracion} minutos`;
    }
}
exports.Cancion = Cancion;
