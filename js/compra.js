const formularioElement = document.getElementById("formulario");
const selectElement = document.getElementById("mi-select");
const cantidadElement = document.getElementById("cantidad");
const calcularButton = document.getElementById("boton-calcular");
const resetButton = document.getElementById("boton-reset");
const resultadoElement = document.getElementById("resultado");

const descuentos = {
  estudiante: 80,
  trainee: 50,
  junior: 15,
};

function calcularPrecioTotal(event) {
  event.preventDefault();

  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let mail = document.getElementById("mail").value
  let cantidad = parseInt(cantidadElement.value);

  if (nombre.trim() === "" || apellido.trim() === "" || mail.trim() === "" ) {
    alert("Completa todos los campos del formulario.");
    return;
  }

  if(cantidad < 1){
    alert("Por favor ingrese una cantidad valida");
    return;
  }

  let opcionSeleccionada = selectElement.value;
  let descuento = descuentos[opcionSeleccionada];
  let precioTicket = 200;
  let descuentoPorcentaje = descuento / 100;
  let precioTotal = precioTicket * cantidad * (1 - descuentoPorcentaje);
  resultadoElement.innerHTML = precioTotal.toFixed(2);
}

function resetearValores() {
  formularioElement.reset();
  resultadoElement.innerHTML = "";
}

calcularButton.addEventListener("click", calcularPrecioTotal);
resetButton.addEventListener("click", resetearValores);
