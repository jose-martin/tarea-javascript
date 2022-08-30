const promtTipoBocadito = "Ingrese el tipo de bocadito: (1 = S/ 1.00 | 2 = S/ 2.00 | 3 = S/ 3.00)";
const promtBocaditos = "Ingrese la cantidad de bocaditos (Coloque N para no escoger bocaditos)";
const promtTortas = "Ingrese la cantidad de tortas (Coloque N para no escoger tortas)";
let precioBocadito1 = 1;
let precioBocadito2 = 2;
let precioBocadito3 = 3;
let precioTorta = 35;
let sinValor = "N"

function calcularPedido() {
    let cantidadBocaditos = prompt(promtBocaditos);
    while (cantidadBocaditos !== sinValor && parseInt(cantidadBocaditos) < 50) {
        alert("Cantidad minima es 50");
        cantidadBocaditos = prompt(promtBocaditos);
    }


    let tipoBocadito
    if (cantidadBocaditos !== sinValor) {
        tipoBocadito = prompt(promtTipoBocadito);
        while (tipoBocadito !== "1" && tipoBocadito !== "2" && tipoBocadito !== "3") {
            alert("Escoja un tipo de bocadito correcto");
            tipoBocadito = prompt(promtTipoBocadito);
        }
    }

    let cantidadTorta = prompt(promtTortas);
    while (cantidadTorta !== sinValor && parseInt(cantidadTorta) <= 0) {
        alert("Cantidad minima es 1");
        cantidadTorta = prompt(promtTortas);
    }

    if (cantidadBocaditos === sinValor && cantidadTorta === sinValor) {
        alert("No ha escogido ningun bocadito ni torta. Gracias.")
        return;
    }

    let precioTotal = 0;

    if (cantidadBocaditos !== sinValor) {

        let valorBocadito = 0;

        switch (tipoBocadito) {
            case "1":
                valorBocadito = precioBocadito1;
                break;
            case "2":
                valorBocadito = precioBocadito2;
                break;
            case "3":
                valorBocadito = precioBocadito3;
                break;
        }
        cantidadBocaditos = parseInt(cantidadBocaditos)
        precioTotal = precioTotal + (valorBocadito * cantidadBocaditos)
    }

    if (cantidadTorta !== sinValor) {
        cantidadTorta = parseInt(cantidadTorta)
        precioTotal = precioTotal + (precioTorta * cantidadTorta)
    }

    alert(`Su pedido sale S/ ${precioTotal.toFixed(2)}`);

}

calcularPedido();



