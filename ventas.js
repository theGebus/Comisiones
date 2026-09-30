// Constantes
const Venta_Base = 5;

function calcularComision(numVentas, precioProducto) {
    let comision = 0;

    if (numVentas > Venta_Base) {
        let ventasExtra = numVentas - Venta_Base;
        comision = ventasExtra * (precioProducto * 0.10);
    }

    return comision;
}

// Obtener el valor de la comisión
function calcular() {
    let sueldoBase = recuperarFloat("txtSueldoBase");
    let ventas = recuperarFloat("txtVentas");
    let precio = recuperarFloat("txtPrecio");

    let comision = calcularComision(ventas, precio);
    let total = sueldoBase + comision;

    mostrarEnSpan("spSueldoBase", sueldoBase);
    mostrarEnSpan("spComision", comision);
    mostrarEnSpan("spTotal", total);
}

