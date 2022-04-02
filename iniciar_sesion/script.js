import {alternarFondo} from "./scripts/cambiar_fondo.js"
import {alternarFormulario} from "./scripts/cambiar_form.js"
import {alternarRecuperar} from "./scripts/cambiar_recuperar.js"

const d = document

d.addEventListener("DOMContentLoaded", (e) => {
    alternarFondo(".main")
    alternarFormulario("form_login","form_register")
    alternarRecuperar(".frame_black",".salir_btn",".olvido")
})
