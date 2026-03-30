import { Cancion } from "./cancion"; //import se utiliza para importar la clase Cancion desde el archivo cancion.ts 
import { Album } from "./album"; //x2
import { PlataformaDeMusica } from "./plataformaDeMusica"; //x3

const cancion1 = new Cancion("The Subway", "Chappell Roan", 4.1);
const cancion2 = new Cancion("What Was That", "Lorde", 4.3);
const album1 = new Album("Pure Heroine", "Lorde", 42);

const plataforma = new PlataformaDeMusica(); //const se utiliza para declarar una constante llamada plataforma

plataforma.agregarCancion(cancion1);
plataforma.agregarCancion(cancion2);
plataforma.agregarCancion(album1);

console.log(plataforma.mostrarCanciones()); //console.log sirve para mostrar el resultado de la funcion mostrarCanciones() 
console.log(plataforma.buscar("The Subway"));
console.log(plataforma.buscar("The Subway", "Chappell Roan"));
console.log(cancion1.marcarComoFavorito());
