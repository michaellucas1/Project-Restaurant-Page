import "./index.css";
class MyComponent {
    constructor(){
        this.header = document.querySelector('.header');
        this.addWindowListener();
        this.addButtonListener();
    }
    addWindowListener(){
        this.scrollOpacity = this.scrollOpacity.bind(this);
        window.addEventListener('scroll',this.scrollOpacity);
    }
    addButtonListener(){
        this.home=document.querySelector("nav > button:nth-of-type(1");
        this.menu=document.querySelector("nav > button:nth-of-type(2)");
        this.contact=document.querySelector("nav > button:nth-of-type(3)");
        this.about=document.querySelector("nav > button:nth-of-type(4)");
        this.home.addEventListener("click",this.renderHomePage.bind(this));
        this.menu.addEventListener("click",this.renderMenuPage.bind(this));
        this.contact.addEventListener("click",this.renderContactPage.bind(this));
        this.about.addEventListener("click",this.renderAboutPage.bind(this));
    }
    removeAllListener(){
        window.removeEventListener('scroll',this.scrollOpacity);
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
new MyComponent();