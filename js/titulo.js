const titulo = document.querySelector("[data-titulo]");

let j = 0;
let bandera = false;
let escala = 100
function luces() {
  let texto = titulo.textContent;
  if (j == 4) {
    bandera = true;
  }
  if (bandera) {
    if (j == 0) {
      bandera = false;
    }
    j -= 0.5;
    escala -= 1.5;
  } else {
    j += 0.5;
    escala += 1.5
  }


  for (i in texto) {
    if (i != 0 && i != texto.length) {

      titulo.style.textShadow = `0px 0px ${j}px white,
      0px 0px ${j}px white`;
      titulo.style.transform = `scale(${escala}%)`
    }
  }
}

setInterval(luces, 50);

