document.addEventListener("DOMContentLoaded", function () {
  // Objeto de puertas y sus imágenes de regalo
  const puertas = {
    1: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    2: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    3: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    4: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    5: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    6: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    7: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    8: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    9: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    10: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    11: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    12: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    13: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    14: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    15: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    16: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    17: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    18: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    19: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    20: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    21: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    22: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    23: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
    24: { disponible: "URL REGALO", noDisponible: "URL NO DISPONIBLE" },
  };

  const modal = document.getElementById("modal-regalo");
  const modalImg = document.getElementById("regalo-img");
  const closeModal = document.getElementsByClassName("close")[0];
  const today = new Date();
  const diaActual = today.getDate();
  const mesActual = today.getMonth() + 1; // Los meses empiezan desde 0, por eso sumamos 1

  // Función para abrir el modal y mostrar la imagen correspondiente
  function abrirModal(imagen) {
    modalImg.src = imagen;
    modal.style.display = "flex";
  }

  // Cerrar el modal
  closeModal.onclick = function () {
    modal.style.display = "none";
  };

  // Cerrar el modal si se hace clic fuera del contenido
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  // Controlar las puertas según la fecha
  for (let i = 1; i <= 24; i++) {
    const puerta = document.getElementById("puerta-" + i);
    const puertaDia = puerta.getAttribute("data-dia");

    // Si la fecha del día actual es mayor o igual que el día de la puerta, mostrar la imagen del regalo
    if (mesActual === 12 && diaActual >= puertaDia) {
      puerta.addEventListener("click", function (e) {
        e.preventDefault(); // Evitar que se abra un enlace
        abrirModal(puertas[puertaDia].disponible); // Abre el lightbox con la imagen del regalo
      });
    } else {
      puerta.addEventListener("click", function (e) {
        e.preventDefault(); // Evitar que se abra un enlace
        abrirModal(puertas[puertaDia].noDisponible); // Abre el lightbox con la imagen de "no disponible"
      });
    }
  }
});
