import "./styles/index.css";
import displayHeader from "./component/Header";
import displayBanner from "./component/HeroBanner";
import displayHome from "./component/HomePage";
import displayAbout from "./component/AboutPage";
import displayMenu from "./component/MenuPage";

class MyComponent {
    constructor(){
        displayHeader.init();
        displayHeader.add();
        displayBanner.init();
        displayBanner.add();
        this.header = document.querySelector('.header');
        this.home=document.querySelector("nav > button:nth-of-type(1");
        this.menu=document.querySelector("nav > button:nth-of-type(2)");
        this.about=document.querySelector("nav > button:nth-of-type(3)");
        this.addWindowListener();
        this.addButtonListener();
        this.activePage=[];
        this.activeButton=[];
        this.changeActivePage(displayHome);
        this.changeButtonColor(this.home);
    }
    addWindowListener(){
        this.scrollOpacity = this.scrollOpacity.bind(this);
        window.addEventListener('scroll',this.scrollOpacity);
        this.removeAllListener = this.removeAllListener.bind(this); 
        window.addEventListener('beforeunload',this.removeAllListener);
    }
    addButtonListener(){
        const home = "renderHomePage"
        this.renderHomePage = this.renderHomePage.bind(this);
        this.renderMenuPage = this.renderMenuPage.bind(this);
        this.renderAboutPage = this.renderAboutPage.bind(this);
        this.home.addEventListener("click",this.renderHomePage);
        this.menu.addEventListener("click",this.renderMenuPage);
        this.about.addEventListener("click",this.renderAboutPage);
    }
    removeAllListener(event){
        event.preventDefault();
        window.removeEventListener('scroll',this.scrollOpacity);
        window.removeEventListener('beforeunload',this.removeAllListener);
        this.home.removeEventListener("click",this.renderHomePage);
        this.menu.removeEventListener("click",this.renderMenuPage);
        this.about.removeEventListener("click",this.renderAboutPage);
    }
    scrollOpacity(){
        let scrollPos = window.scrollY;
        if(scrollPos>300){
            this.header.style.backgroundColor= `rgba(35, 32, 28,1)`;
        }
        else{
            this.header.style.backgroundColor=`rgba(35, 32, 28,0.3)`;
        }
    }
    changeActivePage(currentPage){
        if(this.activePage.length !==0){
            this.activePage.pop().remove();
        }
        currentPage.init();
        currentPage.add();
        this.activePage.push(currentPage);
    }
    changeButtonColor(currentButton){
        if(this.activeButton.length !==0){
            this.activeButton.pop().style.color="rgb(255,255,255)";
        }
        currentButton.style.color="rgb(149, 1, 1)";
        this.activeButton.push(currentButton);
    }
    renderHomePage(){
        this.changeActivePage(displayHome);
        this.changeButtonColor(this.home);
    }
    renderMenuPage(){
        this.changeActivePage(displayMenu);
        this.changeButtonColor(this.menu);
    }
    renderAboutPage(){
        this.changeActivePage(displayAbout);
        this.changeButtonColor(this.about);
    }
}

new MyComponent();