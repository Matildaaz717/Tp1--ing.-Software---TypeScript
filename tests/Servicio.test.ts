import{Servicio} from "../src/Servicio";
import { describe, expect, test } from "vitest";

describe ("Test de Servicio",() => {
  
    test("Crear servicio", () => {

        let servicio= new Servicio ("Esmaltado Semipermanente",0,0);

        expect(servicio.getNombre()). toBe("Esmaltado Semipermanente");
        expect(servicio.getPrecio()). toBe(7000);
        expect(servicio.getTiempo()). toBe(1);
    });


    test("No se debe poder cambiar el precio", ()=>{
        let servicio = new Servicio ("Esmaltado Semipermanente", 10000,10);

        expect(servicio.getPrecio()).toBe(7000);
        expect(servicio.getTiempo()).toBe(1);

    }); 

    test("Mostrar datos del servicio",()=>{

        let servicio = new Servicio ("Kapping Gel", 0, 0);

        let datos= servicio.mostrarDatos();

        expect(datos).toBe("Servicio:Kapping GelPrecio: $10000Tiempo de Duración: 2hrs");
    });

});
