function Persona(nombre,apellido,edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

const persona1 = new Persona("Ivan","Juarez",30);
const persona2 = new Persona("Luis","Rodriguez",31);

console.log(persona1);
console.log(persona2);

console.log(`===============================================================`);
//Agregar una propiedad al constructor por medio de Protoype

Persona.prototype.telefono = "555-555-5554";

//Agregar una propiedad a un solo objeto en especifico 
persona1.nacionalidad = "Mexicano";

//Agregar un metodo al prototype

Persona.prototype.saludar = function (){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo la edad de ${this.edad}`);
};

persona1.saludar();
persona2.saludar();