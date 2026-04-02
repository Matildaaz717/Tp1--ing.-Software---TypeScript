"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlataformaDeMusica = void 0;
class PlataformaDeMusica {
    constructor() {
        this.canciones = []; // propiedad privada
    }
    agregarCancion(cancion) {
        this.canciones.push(cancion);
    }
    mostrarCanciones() {
        return this.canciones.map(c => c.mostrarInfo()).join("\n"); // mapea cada cancion a su info y las une con salto de linea
    }
    buscar(titulo, artista) {
        if (artista) {
            return `Buscando la cancion "${titulo}" del artista ${artista}`;
        }
        return `Buscando la cancion "${titulo}"`;
    }
}
exports.PlataformaDeMusica = PlataformaDeMusica;
