/* const $info = document.querySelector(".info-registro");
const $contentReg = document.querySelector(".registro-container");
const $pin = document.querySelector(".fixed");
const $pin2 = document.querySelector(".btnPin img");
let control = false;


document.addEventListener("click", e =>{
    e.preventDefault();
    if(e.target===$pin2||e.target===document.querySelector(".btnPin img")||e.target===document.querySelector(".fixed img")||e.target===$pin){
        if(control){
            
            $contentReg.style.gridTemplateAreas = `
                "registro   registro"
                "tabla      info"
            `;
            $pin.style.transform = "translate(120%)"
            setTimeout(()=>{
                $info.style.transform = "translate(0%)";
            
            },500)
            control = false;
        }
        else{
                $info.style.transform = "translate(120%)";
            
            setTimeout(()=>{
                $contentReg.style.gridTemplateAreas = `
                "registro   registro"
                "tabla      tabla"
            `;
            $pin.style.transform = "translate(-120%)"
            },500)
            control = true;
        }
        
        
    }
})  */
const d = document;
import {alteranarVentanasConsultar} from "./scripts/pin-consultar.js";
const $filtrarConsulta = d.querySelector(".filtrar-container");
const $informacionConsulta = d.querySelector(".informacion-container");
const $frameContainer = d.querySelector(".consultas-container");
const $tablaConsulta = d.querySelector(".tabla-container");
const $tbody = d.querySelector("#tabla-contendio");


d.addEventListener("DOMContentLoaded",(e) => {
    alteranarVentanasConsultar($filtrarConsulta,$informacionConsulta,$frameContainer,"#pin-filtrar","#pin-informacion",".btnPinFiltrarMostrar",".btnPinInformacionMostrar");
    cargarArticulos();
    
})

const camposNombres = ["cantidad","descripcion","modelo","serie","valor","marca","adquisicion","fechaAdquisicion","area","resguardante","estatus"]
/* CheckboxPrueba */
const $checkboxesCampos = d.querySelector("#campos-container");
/* inputs set */
let activo = false;
d.addEventListener("click",(e)=>{
    console.log(e.target)
    if(e.target.matches("#click-selectCampos")){
        $checkboxesCampos.style.display = activo?"none":"block";
        activo = activo?false:true;
        console.log(activo)
    }
    if(e.target.matches("td")){
        camposNombres.forEach(el=>{
            d.querySelector(`[nameCampo = "${el}"]`).value = d.querySelector(`#${e.target.parentNode.id} > [campo = "${el}"]`).innerText

        })
    }
})

function cargarArticulos(){
    async function fetchArticulos(){
        const response = await fetch("./helpers/articulos.json");
        if(!response.ok) {
            const message = `Un error ha ocurrido ${response.status}`;
            throw new Error(message);
        }
        const articulos = await response.json();
        articulos.Articulos.forEach((el,i)=>{
            $tbody.innerHTML += `
            <tr id = "row-consulta-${i}" style="background-color:${(i%2===0)?"var(--gray)":"white"};">
                <td campo = "numInventario">${el.NumInventario}</td>
                <td campo = "cantidad">${el.Cantidad}</td>
                <td campo = "descripcion">${el.Descripcion}</td>
                <td campo = "modelo">${el.Modelo}</td>
                <td campo = "serie">${el.Serie}</td>
                <td campo = "valor">${el.Valor}</td>
                <td campo = "marca">${el.Marca}</td>
                <td campo = "adquisicion">${el.Adquisicion}</td>
                <td campo = "fechaAdquisicion">${el.FechaDeAdquisicion}</td>
                <td campo = "area">${el.Area}</th>
                <td campo = "resguardante">${el.Resguardante}</td>
                <td campo = "estatus">${el.Estatus}</td>
            </tr>
            `
        }) 
    }
    fetchArticulos().catch(err=>
        err.message
    )
}

