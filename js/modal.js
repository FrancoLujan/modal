
const boton = document.querySelector("[data-boton]");
let = giros = 0
const corazon = document.querySelector("[data-corazon]");
function animacion(){
    corazon.style.transform = `rotateY(${giros}deg)`;
    giros ++
}


function modal(){

    const modal = document.querySelector("[data-caja_modal]");
    modal.classList.remove("caja_modal_invisible");
    modal.classList.add("caja_modal_visible");
    let tiempo = setInterval(animacion, 10);
  
    modal.addEventListener("click", () =>{
        modal.classList.remove("caja_modal_visible");
        modal.classList.add("caja_modal_invisible");
        clearInterval(tiempo)
    })
}


boton.addEventListener("click", modal)



