class Animal{
    constructor(nombre,tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }
    emitirSonido(){
        console.log(`El animal emite un sonido`);

    }
}

//Estamos estendiendo las propiedades de la clase Animal a la clase Perro
class Perro extends Animal{
    constructor(nombre,tipo,raza){
        super(nombre,tipo); //Usamos super para poder utilizar las propiedades de nombre y tipo que son heredades de la clase Animal
        this.raza = raza;
    }
    //Podemos reescribir los metodos
    emitirSonido(){
        console.log("El perro ladra");
    }
    correr(){
        console.log(`${this.nombre} corre alegremente`);
    }
}

const perro1 = new Perro("Bobby","Perro","Boxer");

console.log(perro1);
perro1.emitirSonido();
perro1.correr();

