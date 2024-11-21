

// Seleccionar el formulario y añadir el listener para el evento 'submit'
const form = document.getElementById('form-cliente');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Evitar el envío por defecto del formulario

  // Capturar los valores de los campos
  const sr = document.getElementById('sr-o-sra').value;
  const Mr = document.getElementById('mr-o-ms').value;
  const nameClient = document.getElementById('nombre-apellidos').value;
  const fechaEs = document.getElementById('fecha-es').value;
  const fechaEn = document.getElementById('fecha-en').value;
  const Dir1 = document.getElementById('direccion-linea-1').value;
  const Dir2 = document.getElementById('direccion-linea-2').value;
  const numero = document.getElementById('numero-telefono').value;
  const correo = document.getElementById('correo-electronico').value;
  const nameAgent = document.getElementById('nombre-agente').value;


  // Usar los datos como variables
  console.log("Nombre:", nameClient);
  console.log("Correo Electrónico:", correo);

  //datosFormulario({ nameClient, correo });
});

// export function datosFormulario(datos) {
//     console.log("Procesando los siguientes datos:", datos);
//     return datos; // Devuelve los datos si necesitas usarlos en otro archivo
// }
  