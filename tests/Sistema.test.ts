import { describe, expect, test, TestRunner } from "vitest";
import { Cliente } from "../src/Cliente";
import { Turnos } from "../src/Turnos";
import { Servicio } from "../src/Servicio";
import { Sistema} from "../src/Sistema";

describe("Prueba del sistema", () =>{

    test ("Debe poder agregar un cliente al sistema", () =>{

        let sistema= new Sistema(); 
        let cliente1= new Cliente (123,"Matilda",3794130303);
        let cargar= sistema.agregarCliente(cliente1);

        expect(cargar).toBe(true);
        expect(sistema.buscarCantidadClientes()).toBe(1);
        expect(sistema.obtenerCliente(0)).toBe(cliente1);
    });

    test("Agregar un servicio al sistema", ()=>{

        let sistema= new Sistema();
        let servicio1 = new Servicio ("Esmaltado Semipermanente", 7000,1);

        let cargar = sistema.agregarServicio(servicio1);
        
        expect(cargar).toBe(true);
        expect(sistema.buscarCantidadServicios()).toBe(1);
        expect(sistema.obtenerServicio(0)).toBe(servicio1);

    });



    test ("Debe poder agendar un turno", () =>{
        
        let sistema = new Sistema ();
        let cliente1 = new Cliente (123,"Matilda",3794130303);
        let servicio1 = new Servicio ("Esmaltado Semipermanente", 7000,1);
        
    sistema.agregarCliente(cliente1);
    sistema.agregarServicio(servicio1);

     let cargar = sistema.crearTurno(123,cliente1, servicio1, "09/05/2026", "14:00" );

    expect(cargar).toBe(true);
    expect(sistema.buscarCantidadTurnos()).toBe(1);
    });



    test ("Buscar un turno por numero de identificacion", () =>{
        let sistema = new Sistema ();

        let cliente1 = new Cliente (123,"Matilda",3794130303);
        let cliente2 = new Cliente (345,"Lorena",3794255293);

        let servicio1 = new Servicio ("Esmaltado Semipermanente", 7000,1);
        let servicio2 = new Servicio ("kapping Gel", 10000,2);

    sistema.crearTurno(123,cliente1, servicio1, "09/05/2026", "14:00" );
    sistema.crearTurno(345,cliente2, servicio2, "05/09/2026", "11:00" );

    let turnoBuscado = sistema.buscarTurnoPorIdentificacion(345);

    expect(turnoBuscado?.getIdentificacion()).toBe(345);
    });



    test ("Buscar turno que no existe", ()=>{
        let sistema = new Sistema ();
        let turnoBuscado = sistema.buscarTurnoPorIdentificacion(583);

        expect(turnoBuscado).toBeNull();
    });

    
    test("Cancelar turno", ()=>{
         let sistema = new Sistema ();

        let cliente2 = new Cliente (345,"Lorena",3794255293);
        let servicio2 = new Servicio ("kapping Gel", 10000,2);

    sistema.crearTurno(345,cliente2, servicio2, "05/09/2026", "11:00" );

    let cargar= sistema.cancelarTurno(345);

    expect(cargar).toBe(true);
    });



    test("Contar la cantidad turnos", () =>{
        let sistema = new Sistema ();

        let cliente1 = new Cliente (123,"Matilda",3794130303);
        let cliente2 = new Cliente (345,"Lorena",3794255293);

        let servicio1 = new Servicio ("Esmaltado Semipermanente", 7000,1);
        let servicio2 = new Servicio ("kapping Gel", 10000,2);

        sistema.agregarCliente(cliente1);
        sistema.agregarCliente(cliente2);
        sistema.agregarServicio(servicio1);
        sistema.agregarServicio(servicio2);


    sistema.crearTurno(123,cliente1, servicio1, "09/05/2026", "14:00" );
    sistema.crearTurno(345,cliente2, servicio2, "05/09/2026", "11:00" );

    expect(sistema.buscarCantidadClientes()).toBe(2);
    expect(sistema.buscarCantidadServicios()).toBe(2);
    });

});
