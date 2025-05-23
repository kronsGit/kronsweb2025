const persona = {
    nombre: "Ivan",
    edad: 30,
    direccion:{
        calle: "Av Mayo 220",
        ciudad:"CDMX",
    },
    saludar(){
        console.log(`Hola, mi nombre es ${persona.nombre}`);
    }
};


persona.saludar();
persona.telefono = "555-555-5555"; //Agregar un nuevo metodo
console.log(persona.telefono);

persona.despedir = () =>{     //Agregar un metodo
    console.log("Adios");
};
persona.despedir();


//Borrar propiedades o Metodos de un Objeto
delete persona.telefono;
delete persona.despedir;
console.log(persona);