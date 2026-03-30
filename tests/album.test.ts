import { Album } from '../src/album';
import { describe, it, expect } from 'vitest';

describe('Album', () => {
  it('deberia reproducir el album', () => {
    const album = new Album('Melodrama', 'Lorde', 40);
    expect(album.reproducir()).toBe('Reproduciendo album: Melodrama de Lorde');
  });

  it('deberia pausar el album', () => {
    const album = new Album('PURE HEROINE', 'Lorde', 40);
    expect(album.pausar()).toBe('Album pausado: PURE HEROINE');
  });

  it('deberia detener el album', () => {
    const album = new Album('Sour', 'Olivia Rodrigo', 40);
    expect(album.detener()).toBe('Album detenido: Sour');
  });

  it('deberia avanzar el album', () => {
    const album = new Album('Sour', 'Olivia Rodrigo', 40);
    expect(album.avanzar()).toBe('Siguiente canción en: Sour');
  });

  it('deberia mostrar informacion del album', () => {
    const album = new Album('Sour', 'Olivia Rodrigo', 40);
    expect(album.mostrarInfo()).toBe('Album: Sour | Artista: Olivia Rodrigo | Duracion: 40 minutos');
  });
});
