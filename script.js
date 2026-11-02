function calcPresupuesto() {
    // Funcionalidades del formulario principal
    let responsable = "", destino = "", fecha_excursion = new Date(), num_participantes = 0, precio_persona = 0, precio_bus = 0;

    responsable = document.getElementById("responsable").value;
    destino = document.getElementById("destino").value;
    fecha_excursion = document.getElementById("fecha").value;
    num_participantes = document.getElementById("participantes").value;
    precio_persona = document.getElementById("precio_entrada").value;
    precio_bus = document.getElementById("precio_autobus").value;

    section_elemento = document.getElementById("section_resultados");

}

function recogerInfoNavegador() {
    // Funcionalidades para la "Información del navegador"
    let ventana = "", pantalla = "", conexion = "";

    ventana = `${screen.width}px x ${screen.height}px`; // Funciones del objeto screen para recoger el ancho y alto de la ventana
    pantalla = `${screen.availWidth}px x ${screen.availHeight}px`; // Funciones del objeto screen que recogen los datos de la pantalla en este caso
    if (navigator.onLine) {
        conexion = "Con conexión";
    } else {
        conexion = "Sin conexión";
    }

    document.getElementById("info_navegador").innerHTML = `Ventana: ${ventana}<br>
    Pantalla: ${pantalla}<br>
    Conexión: ${conexion}`;
    
}
        
// Llamada de funciones que se ejecutan sin interacción
recogerInfoNavegador();