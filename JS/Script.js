function toggleMenu() {
    var nav = document.querySelector('.navegacion ul'); // Corregido para seleccionar la lista de navegación
    nav.classList.toggle('active');
}

/*carrousell tutores*/
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    let currentIndex = 0;
  
    function nextSlide() {
      if (currentIndex < carousel.children.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateSlide();
    }
  
    function prevSlide() {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = carousel.children.length - 1;
      }
      updateSlide();
    }
  
    function updateSlide() {
      const newPosition = -currentIndex * 100 + "%";
      carousel.style.transform = "translateX(" + newPosition + ")";
    }
    
    document.getElementById("prevBtn").addEventListener("click", prevSlide);
    document.getElementById("nextBtn").addEventListener("click", nextSlide);

    // Cambia de imagen cada 3 segundos (ajustable)
    
});


 /* fin carrouseller tutores */

 /*validaciones formularios */
 function validarLongitudContrasena() {
  var contrasena = document.getElementById("contrasena").value;
  var mensaje = document.getElementById("mensajeContrasena");

  if (contrasena.length < 6) {
      mensaje.innerHTML = "La contraseña debe tener al menos 6 caracteres.";
      mensaje.style.color = "red";
  } else {
      mensaje.innerHTML = "";
  }
}

function validarCoincidenciaContrasenas() {
  var contrasena = document.getElementById("contrasena").value;
  var confirmarContrasena = document.getElementById("confirmarContrasena").value;
  var mensaje = document.getElementById("mensajeContrasena");

  if (contrasena !== confirmarContrasena) {
      mensaje.innerHTML = "Las contraseñas no coinciden.";
      mensaje.style.color = "red";
  } else {
      mensaje.innerHTML = "";
  }
}

function validarFormulario() {
  // Puedes agregar aquí más validaciones si es necesario
  return true; // Retorna 'true' si el formulario es válido, 'false' si no lo es
}

// JavaScript para cambiar el modo
const modoOscuroBtn = document.getElementById('modoOscuroBtn');

modoOscuroBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});


// Asegúrate de que el siguiente código esté dentro de tu función DOMContentLoaded o similar

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode', darkModeToggle.checked);
});
