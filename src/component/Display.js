import Renderer from "./Renderer";
export default class Display{
    constructor(data){
        this.data =data;
        this.display = new Renderer();
    }
    init(){
        this.display.initialize(this.data);
    } 
    add(){
        this.display.appendAll();
    }
    refresh(){
        this.display.render();
    }
    remove(){
        this.display.detachAll();
    }
}