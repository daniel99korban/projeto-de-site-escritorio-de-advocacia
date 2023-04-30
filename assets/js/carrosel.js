let cont = 1;

setInterval(()=>{
    document.getElementById(`radio${cont}`).checked = true;
    cont++;
    if(cont==5){
        cont=1;
    }
}, 6000)