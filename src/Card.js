import { Node } from "./node.js";
import { Sprite } from "./sprite.js";

export class Card {
  constructor(index, src, cover) {
    this.index = index;
    this._node = new Node();
    this._image = new Sprite(src);
    this._cover = new Sprite(cover);
    this._node.addChild(this._cover);
    this._node.addChild(this._image);
    this.active = false;
  }
  get active() {return this._active;}
  set active(value) {
    this._active = value;
    this._image.active = value
    this._cover.active = !value;
  }
  show(value) {
    this.active = value;
  }
}
