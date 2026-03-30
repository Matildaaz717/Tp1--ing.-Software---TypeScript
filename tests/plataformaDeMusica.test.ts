import { PlataformaDeMusica } from '../src/plataformaDeMusica';
import { Cancion } from '../src/cancion';
import { Album } from '../src/album';
import { describe, it, expect } from 'vitest';

describe('PlataformaDeMusica', () => {
    it('deberia agregar canciones y mostrar su informacion', () => {
        const plataforma = new PlataformaDeMusica();
        const cancion1 = new Cancion("The Subway", "Chappell Roan", 4.1);
        const cancion2 = new Cancion("What Was That", "Lorde", 4.3);

        plataforma.agregarCancion(cancion1);
        plataforma.agregarCancion(cancion2);

        const resultado = plataforma.mostrarCanciones();
        const esperado = `${cancion1.mostrarInfo()}\n${cancion2.mostrarInfo()}`;

        expect(resultado).toBe(esperado);
    });

    it('deberia buscar canciones por titulo y artista', () => {
        const plataforma = new PlataformaDeMusica();

        const resultado1 = plataforma.buscar("Manchild");
        const resultado2 = plataforma.buscar("Manchild", "Sabrina Carpenter");

        expect(resultado1).toBe('Buscando la cancion "Manchild"');
        expect(resultado2).toBe('Buscando la cancion "Manchild" del artista Sabrina Carpenter');
    });
    it('deberia devolver vacio si no hay canciones', () => {
    const plataforma = new PlataformaDeMusica();

    expect(plataforma.mostrarCanciones()).toBe('');
    });

    it('deberia agregar albums y mostrar su informacion junto con las canciones', () => {
        const plataforma = new PlataformaDeMusica();
        const cancion = new Cancion("traitor", "Olivia Rodrigo", 4.1);
        const album = new Album("Sour", "Olivia Rodrigo", 40);

        plataforma.agregarCancion(cancion);
        plataforma.agregarCancion(album);

        const resultado = plataforma.mostrarCanciones();
        const esperado = `${cancion.mostrarInfo()}\n${album.mostrarInfo()}`;

        expect(resultado).toBe(esperado);
    });

});