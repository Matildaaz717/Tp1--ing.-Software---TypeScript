import { Cliente } from "./Cliente";
import { Servicio } from "./Servicio";
import { Turnos } from "./Turnos";

export class Sistema{
 
    private cliente: Cliente[];
    private servicio: Servicio[];
    private turnos: Turnos[];

    private cantidadClientes: number;
    private cantidadServicios: number;
    private cantidadTurnos: number; 

    constructor(){
        this.cliente=[];
        this.servicio =[];
        this.turnos =[];

        this.cantidadClientes=0;
        this.cantidadServicios=0; 
        this.cantidadTurnos=0;
    }

public agregarCliente (cliente:Cliente): boolean{ //recibe parametro "cliente" y ese recibe un obj. tipo "Cliente"
    this.cliente[this.cantidadClientes]= cliente;  //arreglo de this.cantidadClientes, indica la posicion donde se guarda el nuevo cliente, se asigna el cliente a la posicion 
    this.cantidadClientes= this.cantidadClientes+1; //aumeta cant de clientes guardados 
    return true; //si, el cliente fue guardado
}

public agregarServicio (servicio: Servicio): boolean{
    this.servicio[this.cantidadServicios]= servicio;
    this.cantidadServicios= this.cantidadServicios +1;
    return true; 
}

public crearTurno(Identificacion: number, cliente: Cliente, servicio:Servicio, fecha:string, hora:string) :boolean{
    let nuevoTurno = new Turnos(cliente, servicio, fecha, hora, Identificacion);
    this.turnos[this.cantidadTurnos]= nuevoTurno;
    this.cantidadTurnos = this.cantidadTurnos + 1;
    return true;

}

public agregarTurno(turnos: Turnos): boolean{
    this.turnos[this.cantidadTurnos]= turnos;
    this.cantidadTurnos = this.cantidadTurnos + 1;
    return true; 
}

public buscarCantidadClientes():number{  //devuelve cuantos clientes hay en el sistema
    return this.cantidadClientes;
}

public buscarCantidadServicios(): number{
    return this.cantidadServicios;
}

public buscarCantidadTurnos(): number{
    return this.cantidadTurnos;
}

public obtenerCliente (posicion: number): Cliente{  //posicion especifica en la que se encuentra el cliente
    return this.cliente[posicion];
}

public obtenerServicio (posicion: number): Servicio{
    return this.servicio[posicion];
}

public obtenerTurno (posicion: number):Turnos {
    return this.turnos[posicion];
}


public buscarTurnoPorIdentificacion(identificacion:number): Turnos | null{ //puede volver un obj. turno o null si no hay nada 
    let i =0; 

    while (i< this.cantidadTurnos){  //i sea menor que la cant de turnos, todavia hay turnos para buscar 
        if(this.turnos[i].getIdentificacion()===identificacion){ //toma el turno de la posicion i, busca la ident. compara con la ident que estoy buscando 
            return this.turnos[i]; // si encontro la devulve
        }
        i= i+1; //si no encontro suma una posicion 
    }

    return null; //si no encontro nada
}

public cancelarTurno (identificacion: number):boolean{
    let i=0; 

    while (i< this.cantidadTurnos){
        if(this.turnos[i].getIdentificacion()=== identificacion){
            this.turnos[i].cancelarDatos();
            return true;
        }
        i= i+1;
    }
    return false; 
}

}