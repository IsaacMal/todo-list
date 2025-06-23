const tareas = [];
document.addEventListener("DOMContentLoaded", () => {
    const listaTareas= document.getElementById('lista-tareas');
    const formulario = document.getElementById("form-tarea");
  
    formulario.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Obtener los datos del formulario
      const nombre = formulario.nombre.value;
      const Descripcion = formulario.Descripcion.value;
      const fecha = formulario.fecha.value;
      const tipotarea = formulario.tipo_tarea.value;
      const prioridad = formulario.prioridad.value;
      mostrarToastConfirmacion(nombre,Descripcion,fecha,tipotarea,prioridad);
    });
  
    function mostrarToastConfirmacion(nombre, Descripcion,fecha, tipotarea,prioridad) {
        const toast = document.createElement('div');
        const botonestarea = document.querySelectorAll('.btn-plan');
         botonestarea.forEach((btn) => {
         btn.addEventListener('click', () => {
         toast.className = 'toast-exito';
         toast.innerHTML = `
       <div class="toast-body">
        <h3>📋 Tarea:</strong> ${nombre}</h3>
        <p><strong>Descripción:</strong> ${Descripcion}</p>
        <p><strong>Fecha:</strong> ${fecha}</p>
        <p><strong>Tipo:</strong> ${tipotarea}</p>
        <p><strong>Prioridad:</strong> ${prioridad}</p>
      </div>
      `;
      document.body.appendChild(toast);

     toast.querySelector('.btn-toast').addEventListener('click', () => {
       toast.remove();
     });
     actualizarCarrito();
     });
    });
    formulario.reset();
  }
 });





