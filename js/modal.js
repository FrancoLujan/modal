
const boton = document.querySelector("[data-boton]");
let = giros = 0
const corazon = document.querySelector("[data-corazon]");
function animacion(){
    corazon.style.transform = `rotateY(${giros}deg)`;
    giros ++
}


function modal(){
    console.log("funciono")
    const modal = document.querySelector("[data-caja_modal]");
    modal.classList.remove("caja_modal_invisible");
    modal.classList.add("caja_modal_visible");
    setInterval(animacion, 10);
    modal.addEventListener("click", () =>{
        modal.classList.remove("caja_modal_visible");
        modal.classList.add("caja_modal_invisible");
    })
}


boton.addEventListener("click", modal)


