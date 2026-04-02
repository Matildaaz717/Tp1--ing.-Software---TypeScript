import { Contenido } from "./contenido";

export class PlataformaDeMusica { // clase
    private canciones: Contenido[] = []; // propiedad privada

    public agregarCancion(contenido: Contenido): void { // metodo publico
        this.canciones.push(contenido);
    }
    
    public mostrarCanciones(): string { // metodo publico x2
        return this.canciones.map(cancion => cancion.mostrarInfo()).join("\n"); 
    }
    
    public buscar(titulo: string): string; // sobrecarga de metodo porque se puede buscar por titulo o por titulo y artista
    public buscar(titulo: string, artista: string): string;

    public buscar(titulo: string, artista?: string): string { // metodo sobrecargado porque puede recibir uno o dos parametros
        if (artista) {
            return `Buscando la cancion "${titulo}" del artista ${artista}`;
        }
        return `Buscando la cancion "${titulo}"`;
    }
}