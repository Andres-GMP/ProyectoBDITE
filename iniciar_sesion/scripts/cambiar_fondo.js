const d = document;
export function alternarFondo(frame){
    const $frame = d.querySelector(frame)
    let imagenes = [
        "images/img1.png",
        "images/img2.jpg",
        "images/img3.jpg"
    ];
    let i = 1;
    setInterval(() => {
        $frame.style.backgroundImage = `linear-gradient(rgba(16, 0, 26, 0.5), rgba(16, 0, 26, 0.5)), url(${imagenes[i]})`;
        if (!(i++ < imagenes.length - 1)) i = 0;
    
    }, 5000)
    
}