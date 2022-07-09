/*const cliente = prompt("Nombre y apellido por favor")
const bienvenidaCliente = "Bienvenido/a " + cliente + ". Te dejamos los precios para que elijas el producto que quieras."

alert(bienvenidaCliente)

//Productos disponibles

    const producto1 = "$70 Avena "
    const producto2 = "$80 Pan Integral "
    const producto3 = "$60 Barrita energetica "
    const producto4 = "$50 Bebida energizante "

    alert(producto1 + ", " + producto2 + ", " + producto3 + ", " + producto4 )

    let precioInicial = 0
    let cantidadALlevar = 0
//Elegir el producto
elegirProducto();
function elegirProducto(){
    let productoAElegir = prompt("¿Cuál quiere llevar?")
    switch (productoAElegir){
        case "Avena":
            llevarMas();
    }
}

function llevarMas(){
    let cantidadALlevar = parseInt(prompt("¿Cuantas quiere llevar?"))
            let precioTotal = precioInicial + (cantidadALlevar * 70)
            alert("Su precio total es de $ " + precioTotal)
    const llevarAlgoMas = prompt("¿Quiere llevar algo más?")
    switch (llevarAlgoMas){
        case "Si":
            elegirProducto()
            break;
        case "No":
            const medioDePago = prompt ("Paga en efectivo o con tarjeta")
            if(medioDePago == "Efectivo"){
                cantidadALlevar
                let precioTotal = cantidadALlevar * 70
                alert("Su precio a pagar es de $ " + precioTotal)
                const conCuantoPaga = parseInt(prompt("¿Con cuanto va a abonar?"))
                const vuelto = conCuantoPaga - precioTotal
                alert("Su vuelto es de " + vuelto)
                alert("Gracias por comprarnos")
            }
            else if(medioDePago === "Tarjeta"){
                alert("Tiene que pagar " + ((precioFinal * 0,24) + precioFinal))
                const conCuantoPaga = parseInt(prompt("¿Con cuanto va a abonar?"))
                const vuelto = conCuantoPaga - ((precioFinal * 0,24) + precioFinal)
                alert("Su vuelto es de " + vuelto)
                alert("Gracias por comprarnos")
            }
            else{
                alert("No eligió ningún medio de pago")
                alert(medioDePago)
            }
    }
}
*/

/*
const producto1 = "$60 1kg Avena "
const producto2 = "$80 paquete de pan integral "
const producto3 = "$30 barrita energética "
const producto4 = "$50 1kg de almohaditas"

//Mostrar lista de productos

alert("Nuestra lista de productos disponibles es la siguiente: " + producto1 + " " + producto2 + " " + producto3 + " " + producto4)

//Llevar producto

let productoALlevar = prompt("¿Qué producto desea llevar?")

comprar();

function comprar(){
switch(productoALlevar){
    case "Avena":
        let cantidadALlevar = parseInt(prompt("¿Cuánto desea llevar?"))
        let precioFinal = cantidadALlevar * 60
        let precioConTarjeta = parseInt((cantidadALlevar * 60) + (60*3/100))
        alert("Precio final es $" + precioFinal)
        let medioDePago = prompt("Pagas con efectivo (precio normal) o con tarjeta (3% más)")
        if(medioDePago == "Efectivo"){
            alert("Precio final es $" + precioFinal)
            let abonoCliente = parseInt(prompt("¿Con cuanto va a abonar?"))
            let vueltoCliente = abonoCliente - precioFinal
            alert("Su vuelto es de $" + vueltoCliente)
            alert("Gracias por comprarnos")
        }
        else if(medioDePago == "Tarjeta"){
            alert("Precio final es $" + precioConTarjeta)
            alert("Gracias por comprarnos")
        }
        else{
            alert("Elegí uno de esos dos medios de pago maquinola")
        };
    break;

    case "Barritas":
        let cantidadALlevarBarritas = parseInt(prompt("¿Cuánto desea llevar?"))
        let precioFinalBarritas = cantidadALlevarBarritas * 30
        let precioConTarjetaBarritas = parseInt((cantidadALlevarBarritas * 30) + (30 * 0.3))
        alert("Precio final es $" + precioFinalBarritas)
        let medioDePagoBarritas = prompt("Pagas con efectivo (precio normal) o con tarjeta (recargo 3%)")
        if(medioDePagoBarritas == "Efectivo"){
            alert("Precio final es $" + precioFinalBarritas)
            let abonoClienteBarritas = parseInt(prompt("¿Con cuanto va a abonar?"))
            let vueltoClienteBarritas = abonoClienteBarritas - precioFinalBarritas
            alert("Su vuelto es de $" + vueltoClienteBarritas)
            alert("Gracias por comprarnos")
        }
        else if(medioDePagoBarritas == "Tarjeta"){
            alert("Precio final es $" + precioConTarjetaBarritas)
            alert("Gracias por comprarnos")
        }
        else{
            alert("Elegí uno de esos dos medios de pago maquinola")
        };
    break;

    case "Pan integral":
        let cantidadPan = parseInt(prompt("¿Cuántos paquetes desea llevar?"))
        let precioFinalPan = cantidadPan * 80        
        let precioConTarjetaPan = parseInt((cantidadPan * 80) + (80 * 0.3))
        alert("Precio final es $" + precioFinalPan)
        let medioDePagoPan = prompt("Pagas con efectivo (precio normal) o con tarjeta (recargo 3%)")
        if(medioDePagoPan == "Efectivo"){
            alert("Precio final es $" + precioFinalPan)
            let abonoClientePan = parseInt(prompt("¿Con cuanto va a abonar?"))
            let vueltoClientePan = abonoClientePan - precioFinalPan
            alert("Su vuelto es de $" + vueltoClientePan)
            alert("Gracias por comprarnos")
        }
        else if(medioDePagoPan == "Tarjeta"){
            alert("Precio final es $" + precioConTarjetaPan)
            alert("Gracias por comprarnos")
        }
        else{
            alert("Elegí uno de esos dos medios de pago maquinola")
        };
    break;
}
}

class Familia{
    estructura (nombre, edad, pais){
        this.nombre = nombre;
        this.edad = edad;
        this.pais = pais;
    }
    saludar (){
        console.log("Hola " + this.nombre);
    }
}

const miembro1 = new Familia ("Homero", 45, "Evergreen")

console.log(saludar.miembro1)8888888iuy*/
/*
//Insertamos valores

let carrito = 0;
let costoFinal = 0;
let costoFinalAvena = 0;

//Damos a elegir el producto
elegirProducto();

function elegirProducto (){
    do{
    alert("Elija un producto de la siguiente lista")
    let productos = prompt("$60 Avena; $70 Bolsa de almohaditas")
    if(productos == "Avena"){
        let cantidades = parseInt(prompt("¿Cuanto quiere llevar?"))
        carrito = carrito + cantidades
        alert("Por el momento está llevando " + carrito + " productos")
        let costoFinalAvena = carrito * 60
        let costoFinal = costoFinalAvena + costoFinalBarrita
        alert("Precio por el momento es de $" + costoFinal)
        let llevarAlgoMas = prompt("Desea algo mas")
        if(llevarAlgoMas == "Si"){
            elegirProducto();
        }
        else{
            let abonoCliente = parseInt(prompt("¿Con cuanto vas a abonar?"))
            let vueltoCliente = costoFinalAvena - costoFinalBarrita + abonoCliente
            alert("Su vuelto es de $" + vueltoCliente)
            alert("Gracias por comprar")
            alert("Gracias por comprar")
        }
    }
    else if(productos == "Barritas"){
        let cantidades = parseInt(prompt("¿Cuanto quiere llevar?"))
        carrito = carrito + cantidades
        alert("Por el momento está llevando " + carrito + " productos")
        let costoFinalBarrita = cantidades * 70
        let costoFinal = costoFinalAvena + costoFinalBarrita
        alert("Precio por el momento es de $" + costoFinal)
        let llevarAlgoMas = prompt("Desea algo mas")
        if(llevarAlgoMas == "Si"){
            elegirProducto();
        }
        else{
            let abonoCliente = parseInt(prompt("¿Con cuanto vas a abonar?"))
            let vueltoCliente = costoFinalAvena - costoFinalBarrita + abonoCliente
            alert("Su vuelto es de $" + vueltoCliente)
            alert("Gracias por comprar")
        }
    }
    }while(elegirOtroProducto == "Si");

}*/

let acumuladorCarrito = 0
let cantidadDeProductos = 300000000000000000000
let precioTotal = 0
let acumuladorAvena = 0
let acumuladorBarrita = 0
let acumuladorPanIntegral = 0
let precioAvena = 60
let precioBarrita = 70
let precioPanIntegral = 100

function acumularProductos (){
    acumuladorCarrito =  acumuladorAvena + acumuladorBarrita + acumuladorPanIntegral
    alert("Productos totales: " + acumuladorCarrito)
}

function acumuladorPrecio(){
    precioTotal = precioAvena * acumuladorAvena + precioBarrita * acumuladorBarrita + precioPanIntegral * acumuladorPanIntegral
    alert("Total productos en carrito = " + acumuladorCarrito + " y el precio es de $" + precioTotal)
}

do{
for(let i=0; i <= cantidadDeProductos; i++){
    alert("Bienvenido elija los productos que quieras: $60 Avena; $70 Barritas; $100 Pan integral")
    let productoSeleccionado = prompt("Seleccione el producto")
    if(productoSeleccionado == "Avena"){
        let cantidadDeProductosAvena = parseInt(prompt("¿Cuantas cantidades quiere?"))
        acumuladorAvena = acumuladorAvena + cantidadDeProductosAvena
        let precioAvena = cantidadDeProductosAvena * 60
        let precioTotal = precioAvena
        alert("Precio total de avena " + precioTotal)
    }
    else if(productoSeleccionado == "Barritas"){
        let cantidadDeProductosBarrita = parseInt(prompt("¿Cuantas cantidades quiere?"))
        acumuladorBarrita = acumuladorBarrita + cantidadDeProductosBarrita
        let precioBarrita = cantidadDeProductosBarrita * 70
        let precioTotal = precioBarrita
        alert("Precio total de barritas " + precioTotal)
    }
    else if(productoSeleccionado == "Pan integral"){
        let cantidadDeProductosPanIntegral = parseInt(prompt("¿Cuantas cantidades quiere?"))
        acumuladorPanIntegral = acumuladorPanIntegral + cantidadDeProductosPanIntegral
        let precioPanIntegral = cantidadDeProductosPanIntegral * 100
        let precioTotal = precioPanIntegral
        alert("Precio total de pan integral " + precioTotal)
    }
    acumularProductos();
    acumuladorPrecio();
    alert("Total productos en carrito = " + acumuladorCarrito + " y el precio es de $" + precioTotal)
    let llevarMas = prompt("Quiere más")
    if(llevarMas == "No"){
        alert("Precio total: $" + precioTotal)
        let abonoCliente = parseInt(prompt("¿Con cuanto abona?"))
        let vueltoCliente = parseInt(abonoCliente - precioTotal)
        alert("Su vuelto es de $" + vueltoCliente)
        break
    }    
}
}while(llevarMas == "Si")
