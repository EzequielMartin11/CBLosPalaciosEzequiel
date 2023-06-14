const botonInstagram = document.getElementById("btnInstagram");
botonInstagram.addEventListener("click", accederInstagram);

const botonFacebook = document.getElementById("btnFacebook");
botonFacebook.addEventListener("click", accederFacebook);


function accederInstagram(){
    window.open("https://www.instagram.com/cblospalacios/", '_blank');
}

function accederFacebook(){
    window.open("https://www.facebook.com/CBLosPalacios/?locale=es_ES", '_blank');
    
}