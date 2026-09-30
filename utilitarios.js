// Recuperar el texto de un campo
function recuperarTexto(id) {
    let campo = document.getElementById(id);
    return campo.value;
}

// Recuperar un número decimal
function recuperarFloat(id) {
    let valorTexto = recuperarTexto(id);
    return parseFloat(valorTexto);
}

// Recuperar un número entero
function recuperarInt(id) {
    let valorTexto = recuperarTexto(id);
    return parseInt(valorTexto, 10);
}

// Mostrar un valor en un span
function mostrarEnSpan(id, valor) {
    let campo = document.getElementById(id);
    campo.textContent = valor;
}