// MÁQUINA DE ESCRIBIR
const texto = "Mecánicas Trébol";
let i = 0;

function escribir() {
  const elemento = document.getElementById("maquina");

  // Deshabilitar en dispositivos móviles
  if (window.innerWidth > 768) {
    if (i <= texto.length) {
      elemento.innerHTML = texto.substring(0, i);
      i++;
      setTimeout(escribir, 100);
    } else {
      setTimeout(() => {
        elemento.innerHTML = "";
        i = 0;
        escribir();
      }, 3000);
    }
  } else {
    elemento.innerHTML = texto; // Texto estático en móviles
  }
}
escribir();


// CAMBIAR LOGO EN MODO OSCURO
function cambiarModo() {
  document.body.classList.toggle('modo-oscuro');
  const logo = document.getElementById('logo');
  logo.src = document.body.classList.contains('modo-oscuro') 
    ? 'imagenes/LOGO2.jpeg' 
    : 'imagenes/LOGO.jpeg';

  // Cambiar color del menú hamburguesa si existe
  const menu = document.getElementById('menu');
  if (menu) {
    menu.setAttribute('modo-oscuro', document.body.classList.contains('modo-oscuro'));
  }
}

// FECHA ACTUAL EN EL FOOTER
document.getElementById("fecha").innerHTML = new Date().toLocaleDateString('es-ES', {
  year: 'numeric',
  month: 'long',
  day: 'numeric' 
})+" &copy; Mecánicas Trébol.";

// BOTÓN "IR ARRIBA"
const btnArriba = document.getElementById("btn-arriba");
window.addEventListener("scroll", () => {
  btnArriba.style.display = window.scrollY > 300 ? "block" : "none";
});

// MENÚ HAMBURGUESA
const btnHamburguesa = document.getElementById("hamburguesa");
const menu = document.getElementById("menu");
btnHamburguesa.addEventListener("click", () => {
  menu.classList.toggle("visible");
});
