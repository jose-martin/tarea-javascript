

for (let i = 1; i <= 3; i++) {
    let usuario = prompt("ingrese su usuario");
    let contraseña = prompt("ingrese su contraseña");
    if ((usuario == "martin") && (contraseña == 123)) {
        alert(`Bienvenido ${usuario}`);
        break;
    } else {
        alert("Usuario Incorrecto");
        alert(`intento ${i}`);
    }
    if (i == 3) {
        let respuesta = prompt("Deseas recuperar tus datos S (si) N (no)");

        if (respuesta == "S") {
            alert("usuario martin - contraseña 123");
        }

    }
}