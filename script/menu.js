const boton_menu = document.querySelector(".button_menu");
const header= document.querySelector(".header");
const container_navegation= document.querySelector(".container_navegation");
const body = document.body;


let posActual = 0;
let status_button = true;

//eventos

boton_menu.addEventListener("click", function(){
    container_navegation.classList.toggle("active_button_menu");
    //toggle = add /// remove
    if (status_button) {
        body.setAttribute("style","overflow: hidden;");
        header.setAttribute("style", "backdrop-filter:none");
        status_button = false;
    }
    else{
        body.setAttribute("style","overflow: visible;");
        header.setAttribute("style", "backdrop-filter:blur(10px)");
        status_button = true;
        
    }
});


///header effect
window.addEventListener("scroll", function(){
    if (this.window.scrollY > posActual) {
        //bajando
        header.classList.remove("active_header");
        header.classList.add("desactive_header");
    }
    else{
        //subiendo
        header.classList.remove("desactive_header");

        header.classList.add("active_header");
    }
    posActual = this.window.scrollY;
});

// variables
const container_preloader = document.querySelector(".container_web_loader");

// evento de carga de toda la página
window.addEventListener("load",function(){
    setTimeout(() => {
        // ocultamos el preloader
        container_preloader.setAttribute("style","display:none;");
        setTimeout(() => {
            this.document.body.setAttribute("style","overflow: visible;");
            animaciones();
        }, 500);
    }, 500);
});

function animaciones(){
    // animaciones del portafolio
    let items_header = {
        delay: 350,
        interval: 250,
        distance: '10px',
        origin: 'top'
    }
    let logo = {
        delay: 350,
        distance: '10px',
        origin: 'top'
    }
    let laterales = {
        delay: 2000
    }
    // 1. Creamos un objeto scrollReveal
    window.sr = ScrollReveal();
    sr.reveal('.greeting_profile', {
        delay: 1700,
        duration: 500,
        distance: '50px',
        origin: 'bottom',
    });
    sr.reveal('.name_profile', {
        delay: 1800,
        duration: 500,
        distance: '50px',
        origin: 'bottom',
    });
    sr.reveal('.description_profile', {
        delay: 1900,
        duration: 500,
        distance: '50px',
        origin: 'bottom',
    });
    sr.reveal('.container_section_information', {
        delay: 500,
        duration: 1000,
        distance: '50px',
        origin: 'bottom',
    });
    sr.reveal('.conteiner_card_proyect', {
        delay: 1000,
        duration: 1000,
        distance: '50px',
        origin: 'bottom',
    });
    sr.reveal('.container_subtitle_cards', {
        delay: 1000
    });
    sr.reveal('.proyect_card', {
        delay: 500,
        interval: 500,
        distance: '50px',
        origin: 'bottom'
    });
    sr.reveal('.text_footer_author', {
        delay: 1000,
        duration: 1000,
        distance: '20px',
        origin: 'top',
    });
    sr.reveal('.item_link_footer', items_header);
    sr.reveal(".item_menu", items_header);
    sr.reveal('.button_menu',logo);
    sr.reveal(".container_logo", logo);
    sr.reveal(".container_lateral", laterales);
}