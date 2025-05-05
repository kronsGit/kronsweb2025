function crearCajaAhorros(){
    let dinero = 0; // Esta es la memoria o estado de la caja

    return function(addDinero){
        dinero += addDinero;
        console.log(`Ahora tienes $${dinero} en tu caje de ahorros.`);
    };
}

const miCaja = crearCajadeAhorros(); // Creamos una nueva caja
miCaja(20); // Agregamos 20