function calcPresupuesto() {
    // Funcionalidades del formulario principal
    let fecha_actual = new Date(); // Con new Date() conseguimos la fecha en el momento de la ejecución

    let responsable = document.getElementById("responsable").value;
    let destino = document.getElementById("destino").value;
    let fecha_excursion = new Date(document.getElementById("fecha").value);
    let num_participantes = parseInt(document.getElementById("participantes").value);
    let precio_persona = parseFloat(document.getElementById("precio_entrada").value);
    let precio_bus = parseFloat(document.getElementById("precio_autobus").value);

    let section_elemento = document.getElementById("section_resultados");

    if (responsable == "" || destino == "" || num_participantes < 1 || num_participantes > 120 || num_participantes == "" || precio_persona < 0 || precio_persona == "" || precio_bus < 0 || precio_bus == "" || fecha_excursion < fecha_actual || fecha_excursion == "") {
        // Si falta algún dato, o es incorrecto, se muestra un error y se oculta el cuadro de resultados (para las ocasiones en las que se modifique el formulario y ya esté presente en pantalla)
        alert("Error en los datos.");
        section_elemento.hidden = true;
    } else {
        const ms_dia = 24 * 60 * 60 * 1000; // Milisegundos en un día (operación posterior)

        let autobuses_totales = Math.ceil(num_participantes / 55);
        let entradas_total = parseFloat((num_participantes * precio_persona).toFixed(2));
        let coste_total = parseFloat((entradas_total) + (precio_bus)).toFixed(2);
        let coste_participante = parseFloat((coste_total) / (num_participantes)).toFixed(2);

        let dias_restantes = Math.ceil((fecha_excursion - fecha_actual) / ms_dia); // Días restantes hasta la excursión: se restan las fechas y se divide entre la cantidad de milisegundos de un día
        let mes_excursion = "";

        // Utilizo el método getMonth para conseguir el número del mes de la excursión, de 0 a 11
        switch (fecha_excursion.getMonth()) {
            case 0:
                mes_excursion = "enero";
                break;
            case 1:
                mes_excursion = "febrero";
                break;
            case 2:
                mes_excursion = "marzo";
                break;
            case 3:
                mes_excursion = "abril";
                break;
            case 4:
                mes_excursion = "mayo";
                break;
            case 5:
                mes_excursion = "junio";
                break;
            case 6:
                mes_excursion = "julio";
                break;
            case 7:
                mes_excursion = "agosto";
                break;
            case 8:
                mes_excursion = "septiembre";
                break;
            case 9:
                mes_excursion = "octubre";
                break;
            case 10:
                mes_excursion = "noviembre";
                break;
            case 11:
                mes_excursion = "diciembre";
                break;
        }

        // Se añade el contenido de los cálculos y los datos en formato tabla
        document.getElementById("tabla_resultados").innerHTML = `<p>Hola, ${responsable}. Este es el presupuesto para la excursión:</p>
        <table>
            <tr>
                <td>Destino</td>
                <td>${destino.toUpperCase()}</td>
            </tr>
            <tr>
                <td>Fecha</td>
                <td>${fecha_excursion.getDate()} de ${mes_excursion} de ${fecha_excursion.getFullYear()}</td>
            </tr>
            <tr>
                <td>Faltan</td>
                <td>${dias_restantes} días</td>
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
                <td>${entradas_total}&euro;</td>
            </tr>
            <tr>
                <td>Precio autobuses</td>
                <td>${precio_bus}&euro;</td>
            </tr>
            <tr>
                <td>Coste total</td>
                <td>${coste_total}&euro;</td>
            </tr>
            <tr>
                <td>Por participante</td>
                <td>${coste_participante}&euro;</td>
            </tr>
        </table>`;

        section_elemento.hidden = false;
        guardarLocal();
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

function guardarLocal() {
    // Uso las dos formas de guardar datos en localStorage
    localStorage.setItem("local_particps", participantes.value);
    localStorage.dest_resp = destino.value;
}
        
// Llamada de funciones que se ejecutan sin interacción
recogerInfoNavegador();

document.getElementById("participantes").value = localStorage.local_particps ?? "";
document.getElementById("destino").value = localStorage.getItem("dest_resp") ?? "";