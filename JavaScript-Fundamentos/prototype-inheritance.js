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
console.log(`+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++`);

//Para agregar un nuevo metodo al prototypo se tiene que agregar o en la clase Perro o Animal porque son las que tienen prototypo, no se puede agregar en la instancia perro1 porque al ser ser un prototipo el no genera un prototipo porque ya lo es 

//Esta seria la forma erronea
perro1.nuevoMetodo = function(){
    console.log("Este es un metodo");

};

//Forma correcta
Perro.prototype.leventarPatita = function(){
    console.log("El perro levanto la patita");
};

console.log(perro1);
perro1.emitirSonido();
perro1.correr();
perro1.leventarPatita();

