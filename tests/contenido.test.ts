import { Cancion } from '../src/cancion';
import { describe, it, expect } from 'vitest';

describe('Contenido (a través de Cancion)', () => {
  it('deberia mostrar info usando el método heredado', () => {
    const cancion = new Cancion('Drivers License', 'Olivia Rodrigo', 4.2);
    expect(cancion.mostrarInfo()).toBe('Cancion: Drivers License | Artista: Olivia Rodrigo | Duracion: 4.2 minutos');
  });

  it('deberia marcar y desmarcar favorito correctamente', () => {
    const cancion = new Cancion('Drivers License', 'Olivia Rodrigo', 4.2);
    expect(cancion.isFavorito()).toBe(false);

    expect(cancion.marcarComoFavorito()).toBe('Drivers License se marcó como favorito');
    expect(cancion.isFavorito()).toBe(true);

    cancion.desmarcarFavorito();
    expect(cancion.isFavorito()).toBe(false);
  });

  it('deberia conservar el comportamiento de reproducción de la clase concreta', () => {
    const cancion = new Cancion('Drivers License', 'Olivia Rodrigo', 4.2);
    expect(cancion.reproducir()).toBe('Reproduciendo: Drivers License de Olivia Rodrigo');
    expect(cancion.pausar()).toBe('Cancion pausada: Drivers License');
    expect(cancion.detener()).toBe('Cancion detenida: Drivers License');
  });

  it('deberia manejar marcar favorito multiples veces', () => {
    const cancion = new Cancion('Drivers License', 'Olivia Rodrigo', 4.2);
    expect(cancion.isFavorito()).toBe(false);

    cancion.marcarComoFavorito();
    expect(cancion.isFavorito()).toBe(true);

    cancion.marcarComoFavorito(); // Ya es favorito, pero no cambia
    expect(cancion.isFavorito()).toBe(true);

    cancion.desmarcarFavorito();
    expect(cancion.isFavorito()).toBe(false);
  });
});