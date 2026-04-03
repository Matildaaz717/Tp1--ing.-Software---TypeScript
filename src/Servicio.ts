import { IMostrar } from "./IMostrar";

export class Servicio implements IMostrar{

    private nombre: string;
    private precio: number; 
    private tiempo: number;

    constructor (nombre: string, precio: number, tiempo: number){
        this.nombre= nombre;
        this.precio= precio;
        this.tiempo = tiempo; 
        

        if (precio && tiempo){
           this.precio= precio;
           this.tiempo = tiempo;  
        }
        else{ 
            if (nombre==="Esmaltado Semipermanente"){
                this.precio= 7000;
                this.tiempo= 1;
            }
            else if (nombre==="Kapping Gel"){
                this.precio= 10000;
                this.tiempo= 2;

            }
            else if (nombre=== "Esculpidas"){
                this.precio= 17000;
                this.tiempo= 3;
            }
        }
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
        return "Servicio:" + this.nombre + 
               "Precio: $" + this.precio + 
               "Tiempo de Duración: " + this.tiempo + "hrs"
    }
    }