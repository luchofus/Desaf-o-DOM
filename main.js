let frase = prompt("Ingrese una frase")
let repeticiones = prompt("Cuantas veces quiere repetir la misma")

for(let i=1; i <= repeticiones; i++){
    const resultado = frase + " " + i
    document.write(resultado + "<br>")
}
