let nombre= prompt('Bienvenido a firma digital! , para ingresar informanos tu nombre y apellido aqui');
console.log('El nombre y apellido ingresados: ' + nombre)
const $canvas = document.querySelector("#canvas");
const contexto = $canvas.getContext("2d");
const COLOR = "black";
const GROSOR = 2;
let xAnterior = 0, yAnterior = 0, xActual = 0, yActual = 0;
const obtenerXReal = (clientX) => clientX - $canvas.getBoundingClientRect().left;
const obtenerYReal = (clientY) => clientY - $canvas.getBoundingClientRect().top;
let haComenzadoDibujo = false; 
$canvas.addEventListener("mousedown", evento => {

// Inicio con un punto

xAnterior = xActual;
yAnterior = yActual;
xActual = obtenerXReal(evento.clientX);
yActual = obtenerYReal(evento.clientY);
contexto.beginPath();
contexto.fillStyle = COLOR;
contexto.fillRect(xActual, yActual, GROSOR, GROSOR);
contexto.closePath();

haComenzadoDibujo = true;
});
$canvas.addEventListener("mousemove", (evento) => {
    if (!haComenzadoDibujo) {
        return;
    }
    // Boton presionado y mouse en movimiento marcando todo el recorrido hasta dejar de presionar

    xAnterior = xActual;
    yAnterior = yActual;
    xActual = obtenerXReal(evento.clientX);
    yActual = obtenerYReal(evento.clientY);
    contexto.beginPath();
    contexto.moveTo(xAnterior, yAnterior);
    contexto.lineTo(xActual, yActual);
    contexto.strokeStyle = COLOR;
    contexto.lineWidth = GROSOR;
    contexto.stroke();
    contexto.closePath();
});
["mouseup", "mouseout"].forEach(nombreDeEvento => {
    $canvas.addEventListener(nombreDeEvento, () => {
        haComenzadoDibujo = false;
    });
});