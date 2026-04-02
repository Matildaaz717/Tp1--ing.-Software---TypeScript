 import { IMostrar } from "./IMostrar";

 export class Cliente implements IMostrar{  
    private identificacion: number; 
    private nombre: string; 
    private telefono: number;
    
    constructor(identificacion: number, nombre: string, telefono: number){
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