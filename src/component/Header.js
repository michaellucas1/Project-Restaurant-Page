import Renderer from "./Renderer";
import data from "./JSON/header.json"
export default class Header{
    constructor(){
    }
    render(){
        new Renderer(data);
    }

}