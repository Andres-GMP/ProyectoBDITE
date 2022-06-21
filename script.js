import {alternarFondo} from "./scripts/cambiar_fondo.js"
import {alternarFormulario} from "./scripts/cambiar_form.js"
import {alternarRecuperar} from "./scripts/cambiar_recuperar.js"

const d = document
const $form = d.getElementById("form_register");
console.log($form)
d.addEventListener("click", e =>{
    /* console.log("data")
    e.preventDefault();
    const data = Object.fromEntries(
            new FormData(e.target)
    ) */
    if(e.target.matches("#btn-register")) {
        let x = window.open("CRUD/index.html","_self")
    }
})
d.addEventListener("DOMContentLoaded", (e) => {
    alternarFondo(".main")
    alternarFormulario("form_register","form_register","#register","#register")
    alternarRecuperar(".frame_black",".salir_btn",".olvido")
})

