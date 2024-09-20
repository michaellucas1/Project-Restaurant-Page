import "./styles/index.css";
import displayHeader from "./component/Header";
import displayBanner from "./component/HeroBanner";
import displayHome from "./component/HomePage";

class MyComponent {
    constructor(){
        this.header = document.querySelector('.header');
        this.home=document.querySelector("nav > button:nth-of-type(1");
        this.menu=document.querySelector("nav > button:nth-of-type(2)");
        this.contact=document.querySelector("nav > button:nth-of-type(3)");
        this.about=document.querySelector("nav > button:nth-of-type(4)");
        this.addWindowListener();
        this.addButtonListener();
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
        this.renderContactPage = this.renderContactPage.bind(this);
        this.renderAboutPage = this.renderAboutPage.bind(this);
        this.home.addEventListener("click",this.renderHomePage);
        this.menu.addEventListener("click",this.renderMenuPage);
        this.contact.addEventListener("click",this.renderContactPage);
        this.about.addEventListener("click",this.renderAboutPage);
    }
    removeAllListener(event){
        event.preventDefault();
        window.removeEventListener('scroll',this.scrollOpacity);
        window.removeEventListener('beforeunload',this.removeAllListener);
        this.home.removeEventListener("click",this.renderHomePage);
        this.menu.removeEventListener("click",this.renderMenuPage);
        this.contact.removeEventListener("click",this.renderContactPage);
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
    renderHomePage(){
        console.log("this is  the home page")
    }
    renderMenuPage(){
        console.log("this is  the menu page")
    }
    renderContactPage(){
        console.log("this is  the contact page")
    }
    renderAboutPage(){
        console.log("this is  the about page")
    }
}
displayBanner.init();
displayHeader.init();
displayHeader.add();
displayBanner.add();
displayHome.init();
displayHome.add();

