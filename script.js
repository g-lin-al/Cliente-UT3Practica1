function calcPresupuesto() {
    // Funcionalidades del formulario principal
    let fecha_actual = new Date(); // Con new Date() conseguimos la fecha en el momento de la ejecución

    let responsable = document.getElementById("responsable").value;
    let destino = document.getElementById("destino").value;
    let fecha_excursion = new Date(document.getElementById("fecha").value);
    let num_participantes = document.getElementById("participantes").value;
    let precio_persona = document.getElementById("precio_entrada").value;
    let precio_bus = document.getElementById("precio_autobus").value;

    let section_elemento = document.getElementById("section_resultados");

    if (responsable == "" || destino == "" || num_participantes < 1 || num_participantes > 120 || num_participantes == "" || precio_persona < 0 || precio_persona == "" || precio_bus < 0 || precio_bus == "" || fecha_excursion < fecha_actual || fecha_excursion == "") {
        alert("Error en los datos.");
        section_elemento.hidden = true;
    } else {
        let autobuses_totales = Math.ceil(num_participantes / 55);
        let entradas_total = (parseInt(num_participantes) * parseInt(precio_persona)).toFixed(2);
        let coste_total = (parseFloat(entradas_total) + parseFloat(precio_bus)).toFixed(2);
        let coste_participante = (parseFloat(coste_total) / parseInt(num_participantes)).toFixed(2);

        document.getElementById("tabla_resultados").innerHTML = `<p>Hola, ${responsable}. Este es el presupuesto para la excursión.</p>
        <table>
            <tr>
                <td>Destino</td>
                <td>${destino.toUpperCase()}</td>
            </tr>
            <tr>
                <td>Fecha</td>
                <td>${fecha_excursion.toDateString()}</td>
            </tr>
            <tr>
                <td>Faltan</td>
                <td></td>
            </tr>
            <tr>
                <td>Participantes</td>
                <td>${num_participantes}</td>
            </tr>
            <tr>
                <td>Autobuses</td>
                <td>${autobuses_totales}</td>
            </tr>
            <tr>
                <td>Entradas</td>
                <td>${entradas_total}</td>
            </tr>
            <tr>
                <td>Precio autobuses</td>
                <td>${precio_bus}</td>
            </tr>
            <tr>
                <td>Coste total</td>
                <td>${coste_total}</td>
            </tr>
            <tr>
                <td>Por participante</td>
                <td>${coste_participante}</td>
            </tr>
        </table>`;

        section_elemento.hidden = false;
    }
}

function recogerInfoNavegador() {
    // Funcionalidades para la "Información del navegador"
    let ventana = "", pantalla = "", conexion = "";

    ventana = `${screen.availWidth}px x ${screen.availHeight}px`; // Funciones del objeto screen para recoger el ancho y alto de la ventana sin las áreas reservadas del navegador
    pantalla = `${screen.width}px x ${screen.height}px`; // Funciones del objeto screen que recogen los datos de la ventana general
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