import {Node} from "./Node.js"
export class Sprite extends Node{
    constructor(src){
        super();
        this.elm = document.createElement('img');
        this.elm.style.width = "100%";
        this.elm.style.height = "100%"
        this.image = src;
    }
    get image(){return this._image;}
    set image(value){
        this._image = value;
        this.elm.src = value;
        this.elm.alt = value;
    }
}