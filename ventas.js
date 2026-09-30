//Constantes 

const Venta_Base = 5;

function calcularComision(numVentas,precioProducto){
    let comision = 0;

    if(numVentas>Venta_Base){
        let ventasExtra=numVentas-Venta_Base;
        comision=ventasExtra* (precioProducto*0.10);
    }
    return comision;
}

//Obtener el valor de la comisión

function calcular(){
    let cmpSueldoBase = document.getElementById("txtSueldoBase");
    let cmpVentas = document.getElementById("txtVentas");
    let cmpPrecio = document.getElementById("txtPrecio");

    let SueldoBaseStr=cmpSueldoBase.value;
    let VentasStr=cmpVentas.value;
    let PrecioStr=cmpPrecio.value;


    let SueldoBase = parseFloat(SueldoBaseStr);
    let Ventas = parseFloat(VentasStr);
    let Precio = parseFloat(PrecioStr);

    let comision = calcularComision(Ventas,Precio);

    let total = SueldoBase + comision;

    // Mostrar los resultados
    spSueldoBase=document.getElementById("spSueldoBase");
    spComision=document.getElementById("spComision");
    spTotal=document.getElementById("spTotal");

    spSueldoBase.textContent = SueldoBase;
    spComision.textContent = comision;
    spTotal.textContent = total;
}


