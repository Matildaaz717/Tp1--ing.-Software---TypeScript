import {Turnos} from "../src/Turnos";
import {Cliente} from "../src/Cliente";
import {Servicio} from "../src/Servicio";
import { describe, expect, test } from "vitest";

describe ("Test de Servicio",() => {

    test("Crear un turno",()=>{

        let cliente= new Cliente (123,"Matilda", 3794130303);
        let servicio = new Servicio ("kapping Gel",0, 0 );

        let turno = new Turnos(cliente, servicio, "06/04/2026", "10:00", 123);

        expect (turno.getClientes().getNombre()).toBe("Matilda");
        expect(turno.getServicios().getNombre()).toBe("Kapping Gel");
        expect (turno.getFecha()).toBe("06/04/2026");
        expect (turno.getHora()).toBe("10:00");
        expect(turno.getIdentificacion()).toBe(123);

    });

    test("Cancelar turno",() =>{

        let cliente = new Cliente (123, "Matilda", 3794130303);
        let servicio = new Servicio ("Kapping Gel", 0 ,0);

        let turno=new Turnos(cliente, servicio, "06/04/2026", "10:00", 123);

        turno.cancelarDatos();

        let datos = turno.mostrarDatos();

        expect(datos).toContain( "-Turno nro: 123 -Nombre del Cliente: Matilda -Servicio a Realizar: Kapping Gel -Fecha del Turno: 06/04/2026 -Hora del Turno: 10:00 -Estado del turno: CANCELADO "); 
    });


    test ("Mostrar datos del turno ", ()=>{

        let cliente = new Cliente (3456, "Lorena", 3794255293);
        let servicio = new Servicio ("Esculpidas",0,0 );
        
        let turno = new Turnos (cliente, servicio, "09/05/2026", "17:00", 3456);

        let datos = turno.mostrarDatos();

        expect(datos).toContain("Turno Nro: 3456");
        expect(datos).toContain("Lorena");
        expect(datos).toContain("Esculpidas");
        

    });




});
  