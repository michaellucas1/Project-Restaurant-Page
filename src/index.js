import "./index.css";
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
class Banner{
    constructor(){

    }
}
class Header{
    constructor(){
        this.buttonArray= new Array(4);
        this.createButtons();
        this.nav = document.createElement('nav');
        this.append(this.nav,this.buttonArray);
        this.elements=new Array(2);
        this.createElements();
        this.append(this.elements[0],this.elements[1]);
        this.div = document.createElement('div');
        this.div.classList.add("restaurant-icon","icon");
        this.header = document.createElement('header');
        this.header.classList.add("header");
        this.append(this.header,this.div);
        this.append(this.header,this.elements[0])
        this.append(this.header,this.nav);
        this.body = document.body;
        this.append(this.body,this.header);
    }

    createElements(){
        let i=0;
        const tagNames=['h1','span'];
        const contents=["Neptune's","Crab House"];
        while(this.elements.length>i){
            this.elements[i] = document.createElement(tagNames[i]);
            this.elements[i].textContent = `${contents[i]} `;
            i++;
        }
    }            
    append(parent,child){
        if(Array.isArray(child)){
            let i=0;
            while(child.length>i){
                parent.appendChild(child[i]);
                i++;
            }
        }
        else{
            parent.appendChild(child);
        }
    }
    createButtons(){
        let i =0;
        this.buttonsText =["Home","Menu","Contact","About"];
        while(this.buttonArray.length > i){
            this.buttonArray[i]=document.createElement('button'); v
            this.buttonArray[i].textContent=this.buttonsText[i];
            i++;
        }

    }
}
class Home{
    constructor(){

    }
}
class Menu{
    constructor(){}
}
class Contact{
    constructor(){}
}
class About{
    constructor(){}
}
//const header = new Header();
//const component =new MyComponent();
const heroBannerObject = 
[
    {
        elementName:"parentDiv",
        tagName:"div",
        className:"wrapper hero-banner",
        isParent:true,
        isChild:true,
        parentOf:"childH2"
    },
    {
        elementName:"childH2",
        tagName:"h2",
        isParent:true,
        isChild:true,
        parentOf:"",
        childOf:"parentDiv",
    },
    {
        elementName:"childSpan",
        tagName:"span",
        className:"crab-icon icon",
        isParent:false,
        isChild:true,
        childOf:"childH2",
    },
];
class Renderer{
    constructor(heroBannerObject){
        console.log(heroBannerObject);
    }
}
const render = new Renderer(heroBannerObject);