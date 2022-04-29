const d = document
export function alteranarVentanasConsultar($filtrarCont,$infoCont,$frameCont,idPinFiltrar,idPinInformacion,PinFiltrarMostrar,PinInformacionMostrar){
    const $pinFiltrar = d.querySelector(idPinFiltrar)
    const $pinInformacion = d.querySelector(idPinInformacion)   
    const $btnPinFiltrarMostrar = d.querySelector(PinFiltrarMostrar);
    const $btnPinInformacionMostrar = d.querySelector(PinInformacionMostrar);
    $btnPinFiltrarMostrar.style.transform = "translateY(-150%)";
    $btnPinInformacionMostrar.style.transform = "translate(100%)";

    let mostrarFiltrar = true;
    let mostrarinformacion = true;
    const areas = [
        ["filtrar-consultar","informacion-consultar"],
        ["tabla-consultar","informacion-consultar"]
    ];
    function actualizarAreas(){
        $frameCont.style.gridTemplateAreas = `
                "${areas[0][0]}      ${areas[0][1]}"
                "${areas[1][0]}      ${areas[1][1]}"
                `;
    }
    function cambiarFiltrar(){
        if(mostrarFiltrar){
            $filtrarCont.style.transform = "translateY(-120%)";
            areas[0][0] = areas[1][0]; 
            areas[0][1] = areas[1][1]; 
            setTimeout(()=>{
                actualizarAreas()
                $btnPinFiltrarMostrar.style.transform = "translate(0%)"
                mostrarFiltrar = false;
            },250)
        }
        else{
            $btnPinFiltrarMostrar.style.transform = "translateY(-100%)"
            areas[0][0] = "filtrar-consultar"; 
            if(areas[0][1] === "tabla-consultar") areas[0][1] = "filtrar-consultar";
            actualizarAreas()
            $filtrarCont.style.transform = "translateY(0%)";
            mostrarFiltrar = true;
        }
    }
    function cambiarInfo(){
        if(mostrarinformacion){
            $infoCont.style.transform = "translate(120%)";
            areas[0][1] = areas[0][0]; 
            areas[1][1] = areas[1][0]; 
            setTimeout(()=>{
                actualizarAreas()
                $btnPinInformacionMostrar.style.transform = "translate(0%)"
                mostrarinformacion = false;
            },250)

        }
        else{
            areas[0][1] = "informacion-consultar"; 
            areas[1][1] = "informacion-consultar";
            actualizarAreas()
            $btnPinInformacionMostrar.style.transform = "translate(100%)"
            $infoCont.style.transform = "translate(0%)";
            mostrarinformacion = true;
     
        }
    }
    d.addEventListener("click",(e)=>{
        console.log(e.target)
        if(e.target.matches(idPinFiltrar)||e.target.matches(`${idPinFiltrar} *`)||e.target.matches(PinFiltrarMostrar)||e.target.matches(`${PinFiltrarMostrar} *`)){
            cambiarFiltrar()
            e.preventDefault();
        } 
        else if( e.target.matches(idPinInformacion)||e.target.matches(`${idPinInformacion} *`)||e.target.matches(PinInformacionMostrar)||e.target.matches(`${PinInformacionMostrar} *`)){
            cambiarInfo()
            e.preventDefault();
        } 
        
    })
} 