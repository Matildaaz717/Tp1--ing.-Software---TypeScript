 import { IMostrar } from "./IMostrar";
 import { Persona } from "./Persona";
 
 export class Cliente extends Persona implements IMostrar{  
    private identificacion: number; 
    private telefono: number;
    
    constructor(identificacion: number, nombre: string, telefono: number){
        super(nombre);
        this.identificacion= identificacion;
        this.nombre= nombre;
        this.telefono= telefono;

    }

public getIdentificacion ():number {
    return this.identificacion;
}

public getNombre (): string {
    return this.nombre;
}


public getTelefono ():number {
    return this.telefono;
}


public mostrarDatos(): string {
    return "Cliente:" + this.nombre + "Teléfono: "+ this.telefono;
}

}