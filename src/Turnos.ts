import { Cliente} from "./Cliente";
import { Servicio } from "./Servicio";
import { IMostrar } from "./IMostrar";
import { ICancelar } from "./ICancelar";

export class Turnos implements Cliente, Servicio, IMostrar, ICancelar{

    private Clientes: Cliente; 
    private Servicios: Servicio;
    private Fecha: string;
    private Hora: string;
    private Identificacion: number;

    constructor (Clientes: Cliente, Servicios: Servicio, Fecha: string, Hora: string, ) {
        this.Clientes = Clientes;
        this.Servicios = Servicios;
        this.Fecha = Fecha;
        this.Hora = Hora;
        this.Identificacion= this.Identificacion;
    }

public getClientes():Cliente{
   return this.Clientes; 
}
public getServicios():Servicio{
   return this.Servicios; 
}
public getFecha():string{
   return this.Fecha; 
}
public getHora():String{
   return this.Hora; 
}
public getIdentificacion(): number {
    return this.Identificacion;
}

public mostrarDatos(): string {
    return "Turno Nro: " + this.Identificacion +
    "Nombre del Cliente: " + this.Clientes.getNombre()+
    "Servicio a Realizar: " + this.Servicios.getNombre()+
    "Fecha del Turno: " + this.Fecha+
    "Hora del Turno: " + this.Hora;
}
}