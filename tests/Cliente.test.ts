import { describe, expect, test } from "vitest";
import { Cliente } from "../src/Cliente";

describe ("Purbea de Cliente", () =>{

    test ("Crear un cliente nuevo", ()=>{

        let cliente = new Cliente(1, "ana", 12345678);

        expect(cliente.getIdentificacion()).toBe(1);
        expect(cliente.getNombre()).toBe("ana");
        expect(cliente.getTelefono()).toBe(12345678);
        
    });


    test ("Buscar Cliente que existe", ()=> {
        let clientes: Cliente[]=[];
        let cantidadClientes=3;

        clientes[0]= new Cliente(1,"ana",123);
        clientes[1]= new Cliente(2,"lucas",456);
        clientes[2]= new Cliente(3,"matilda",789);

        let buscarCliente =2; 
        let encontrado= false; 

        let i=0;

        while (i< cantidadClientes){
            if (clientes[i].getIdentificacion()=== buscarCliente){
                encontrado= true; 
            }
            i= i+1;
        }
        expect(encontrado).toBe(true);
    });;


    test("Buscar cliente que no existe", ()=>{
        let clientes: Cliente[]=[];
        let cantidadClientes=3;

        clientes[0]= new Cliente(1,"ana",123);
        clientes[1]= new Cliente(2,"lucas",456);
        clientes[2]= new Cliente(3,"matilda",789);

        let buscarCliente =10; 
        let encontrado: Cliente | null = null;

        let i =0;
         while (i< cantidadClientes){
            if (clientes[i].getIdentificacion()=== buscarCliente){
                encontrado= clientes[i]; 
            }
            i= i+1;
        }
      expect(encontrado).toBeNull();
    });

   
});

