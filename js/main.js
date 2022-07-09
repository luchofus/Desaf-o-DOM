
let acumuladorCarrito = 0
let cantidadDeProductos = 3000000
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
