/*! Built with http://stenciljs.com */
import { h } from '../convergence.core.js';

class FeaturedButton {
    constructor() {
        this.label = 'Click me';
        this.onClickHandler = () => {
            this.featuredButtonClicked.emit();
        };
    }
    render() {
        return (h("button", { onClick: this.onClickHandler }, this.label));
    }
    static get is() { return "featured-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "label": {
            "type": String,
            "attr": "label",
            "reflectToAttr": true
        }
    }; }
    static get events() { return [{
            "name": "featuredButtonClicked",
            "method": "featuredButtonClicked",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ".sc-featured-button-h, .sc-featured-button-h   *.sc-featured-button{-webkit-box-sizing:border-box;box-sizing:border-box}button.sc-featured-button{cursor:pointer;color:#000;font-size:12px;border:1px solid #000;background:transparent;outline:none;padding:10px}button.sc-featured-button:hover{background:grey}"; }
}

export { FeaturedButton };
