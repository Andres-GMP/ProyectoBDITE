const d = document;
export function alternarRecuperar(frame,salir,olvido){
    const $frameRecuperar = d.querySelector(frame)
    $frameRecuperar.style.display = "none"
    function cambiarRecuperar(){
            $frameRecuperar.style.display == "none"? 
            $frameRecuperar.style.display = "flex":
            $frameRecuperar.style.display = "none"
        }
        d.addEventListener("click",(e)=>{
            e.preventDefault()
            if(!e.target.name === "btnLogin")e.preventDefault();
            if(e.target.matches(salir)||e.target.matches(olvido)) cambiarRecuperar();
        
        })
} 