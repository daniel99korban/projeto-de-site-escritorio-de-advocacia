class MenuMobile{

    constructor(menuMobile, navLista, navLinks, equipe){
        this.menuMobile = document.querySelector(menuMobile);
        this.navLista = document.querySelector(navLista);
        this.navLinks = document.querySelectorAll(navLinks);
        this.equipe = document.querySelector(equipe);
        this.classeAtiva = "ativa";
        // fazer referencia a propria classe assim que o evento for chamado
        this.handleClique = this.handleClique.bind(this);
    }

    animacaoLinks(){
        this.navLinks.forEach((link)=>{
            link.style.animation?
            (link.style.animation = ""):
            (link.style.animation = "fade-nav-links 0.5s ease forwards 0.3s");  
        })
    }

    handleClique(){
        this.navLista.classList.toggle(this.classeAtiva);
        this.menuMobile.classList.toggle(this.classeAtiva)
        this.animacaoLinks();
    }

    addEventoClique(){
        this.menuMobile.addEventListener("click", this.handleClique);
    }

    iniciar(){
        if(this.menuMobile){
            this.addEventoClique();
        }
        this.equipe.addEventoClique();
        return false;
    }
}

// criando o objeto
const menuMobileNavBar = new MenuMobile(".menu-mobile", ".nav-lista", ".nav-lista li", ".equipe");
menuMobileNavBar.iniciar();