import { Cancion } from '../src/cancion';
import { describe, it, expect } from 'vitest';

describe('Cancion', () => {
    it('deberia reproducir una cancion', () => {
        const cancion = new Cancion("Manchild", "Sabrina Carpenter", 3.7);

        expect(cancion.reproducir()).toBe('Reproduciendo: Manchild de Sabrina Carpenter');
    });

    it('deberia pausar una cancion', () => {
        const cancion = new Cancion("Little Things", "One Direction", 3.7);

        expect(cancion.pausar()).toBe('Cancion pausada: Little Things');
    });

    it('deberia detener una cancion', () => {
        const cancion = new Cancion("One Thing", "One Direction", 3.7);

        expect(cancion.detener()).toBe('Cancion detenida: One Thing');
    });

    it('deberia avanzar en una cancion', () => {
        const cancion = new Cancion("Walls", "Louis Tomlinson", 3.7);

        expect(cancion.avanzar()).toBe('Avanzando en: Walls');
    });

    it('deberia mostrar la informacion de una cancion', () => {
        const cancion = new Cancion("Red Wine Supernova", "Chappell Roan", 3.7);

        expect(cancion.mostrarInfo()).toBe(
            'Cancion: Red Wine Supernova | Artista: Chappell Roan | Duracion: 3.7 minutos'
        );
    });
});