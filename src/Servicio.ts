import { IMostrar } from "./IMostrar";

export class Servicio implements IMostrar{

    private nombre: string;
    private precio: number; 
    private tiempo: number;

    constructor (nombre: string, precio: number, tiempo: number){
        this.nombre= nombre;
        this.precio= precio;
        this.tiempo = tiempo; 
    }

    public getNombre():string {
        return this.nombre;
    }
     public getPrecio():number {
        return this.precio;
    }
     public getTiempo():number {
        return this.tiempo;
    } 

    public mostrarDatos(): string {
        return "Servicio:" + this.nombre + "Precio: $" + this.precio + "Tiempo de Duración: " + this.tiempo + "hrs"
    }
    }