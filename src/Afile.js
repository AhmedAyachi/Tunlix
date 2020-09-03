

export const fadeIn=(element,display="block",time=0.2)=>{
    if(element!==null){
        const style=element.style;
        style.display=display;
        style.animation=`fadeIn ${time}s 1 linear forwards`;
        style.opacity="1";
    }/*
    @keyframes toggle{
        0% {opacity:0}
        50% {opacity:1}
        100% {opacity:0}
    }
*/}

export const fadeOut=(element,time=0.2)=>{
    if(element!==null){
        const style=element.style;
        style.opacity="0";
        style.animation=`fadeOut ${time}s 1 linear forwards`;
        setTimeout(()=>{
            style.display="none";
            style.animation="";
        },time*1000);
    }/*
    @keyframes fadeOut{
        from {opacity:1}
        to {opacity:0}
    }
*/}

export const toggle=(element,display="block",time=0.2)=>{
    if(element.style.display==="none"){fadeIn(element,display,time)}
    else{fadeOut(element,time)}
}