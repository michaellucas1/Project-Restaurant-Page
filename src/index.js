import "./index.css";
class MyComponent {
    constructor(){
        this.header = document.querySelector('.header');
        this.addListener();
    }
    addListener(){
        this.scrollOpacity = this.scrollOpacity.bind(this);
        window.addEventListener('scroll',this.scrollOpacity);
    }
    removeAllListener(){
        window.removeEventListener('scroll',this.scrollOpacity);
    }
    scrollOpacity(){
        let scrollPos = window.scrollY;
        if(scrollPos>300){
            this.header.style.backgroundColor= `rgba(0,0,0,1)`;
        }
        else{
            this.header.style.backgroundColor=`rgba(0,0,0,0.4)`;
        }
    }
}
new MyComponent();