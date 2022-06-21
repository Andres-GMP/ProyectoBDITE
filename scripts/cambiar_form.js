const d = document
export function alternarFormulario(formregister,formRegister,register,register){
    const $formregister = d.getElementById(formregister)
    const $formRegister = d.getElementById(formRegister)
    $formRegister.style.display="none"
    function cambiar(){
        if($formregister.style.display == "none"){
            $formregister.style.display = "flex"
            $formRegister.style.display = "none"
        }
        else{
            $formregister.style.display = "none"
            $formRegister.style.display = "flex"
        }
    }
    d.addEventListener("click",(e)=>{
        e.preventDefault()
        if(e.target.matches(register)||e.target.matches(register)) cambiar()
    
    })
} 