const d = document
export function alternarFormulario(formLogin,formRegister,login,register){
    const $formLogin = d.getElementById(formLogin)
    const $formRegister = d.getElementById(formRegister)
    $formRegister.style.display="none"
    function cambiar(){
        if($formLogin.style.display == "none"){
            $formLogin.style.display = "flex"
            $formRegister.style.display = "none"
        }
        else{
            $formLogin.style.display = "none"
            $formRegister.style.display = "flex"
        }
    }
    d.addEventListener("click",(e)=>{
        e.preventDefault()
        if(e.target.matches(login)||e.target.matches(register)) cambiar()
    
    })
} 