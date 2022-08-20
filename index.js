let usuario = "martin";
let contraseña = 123;
let respueta = "s";

let todoCorrecto = false

for (let i = 0; i < 3; i++) {

    let usuarioIngresado = prompt("Ingrese su Usuario")
    let contraseñaIngresada = prompt("Ingrese su contraseña")

    if (usuario == usuarioIngresado && contraseña == contraseñaIngresada) {
        todoCorrecto = true;
        alert(`Bienvenido ${usuario}`);
        break;
    } else {
        alert("Datos Incorrectos");
    }

}
if (!todoCorrecto) {
    let respuesta = prompt("Deseas recuperar la contraseña? Si (S), No (N)")

    if (respuesta === "S") {
        alert(`Usuario: ${usuario} - Contraseña: ${contraseña}`)
    }
}





















