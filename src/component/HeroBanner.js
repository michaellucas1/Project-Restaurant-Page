import Renderer from "./Renderer";
import data from "./JSON/heroBanner.json"
export default class HeroBanner{
    constructor(){
    }
    render(){
        new Renderer(data);
    }

}