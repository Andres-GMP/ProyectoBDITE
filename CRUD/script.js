const $info = document.querySelector(".info-registro");
const $contentReg = document.querySelector(".registro-container");
const $pin = document.querySelector(".fixed");
const $pin2 = document.querySelector(".btnPin img");
let control = false;
/* 
    CODIGO HECHO AL AVENTON
*/

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
}) 