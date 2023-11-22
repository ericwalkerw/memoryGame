export class Node { 
  constructor() {
      this.elm = this._createElement();
      this.children = [];
      this.scaleX = 1;
  }
  get x() { return this._x; }
  get y() { return this._y; }
  get width(){return this._width;}
  get height(){return this._height;}
  get scaleX(){return this._scaleX;}
  get active(){return this._active;}
  set x(value) {
      this._x = value;
      this.elm.style.left = this._x + "px";
  }
  set y(value) {
      this._y = value;
      this.elm.style.top = this._y + "px";
  }
  set width(value) {
    this._width = value;
    this.elm.style.width = `${value}px`;
  }
  set height(value){
    this._height = value;
    this.elm.style.height = `${value}px`;
  }
  set scaleX(value){
    this._scaleX = value;
    this.elm.style.transform = `scaleX(${value})`
  }
  set active(value){
    this._active = value;
    this.elm.style.display = value ? "block" : "none";
  }
  _createElement() {
      let elm = document.createElement("div");
      elm.style.position = "absolute";
      elm.style.width = "100px"
      elm.style.height = "100px"
      return elm;
  }
  addChild(node) {
      this.children.push(node);
      this.elm.appendChild(node.elm);
  }
  removeChild(node) {
       // todo
  }
}