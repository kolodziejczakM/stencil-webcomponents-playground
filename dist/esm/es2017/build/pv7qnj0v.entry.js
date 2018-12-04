/*! Built with http://stenciljs.com */
import { h } from '../convergence.core.js';

class FeaturedDropdown {
    constructor() {
        this.isExpanded = false;
        this.chosenOption = { label: '(no options)', value: null };
        this.options = [];
        this.onChange = (event) => {
            const selectedOption = JSON.parse(event.target.getAttribute('value'));
            this.chosenOption = selectedOption;
            this.collapseExpansion();
            this.dropdownValueChanged.emit(selectedOption);
        };
        this.onExpandClick = () => {
            if (this.options.length) {
                this.isExpanded = true;
            }
        };
        this.collapseExpansion = () => {
            this.isExpanded = false;
        };
        this.onOutsideClick = (event) => {
            if (event.target !== this.el) {
                this.collapseExpansion();
            }
        };
    }
    onIsExpandedChange(newValue) {
        console.log('New value of expanded is: : ', newValue);
    }
    componentDidLoad() {
        document.addEventListener('click', this.onOutsideClick);
    }
    componentDidUnload() {
        document.removeEventListener('click', this.onOutsideClick);
    }
    render() {
        return (h("div", { class: "dropdown" },
            h("div", { onClick: this.onExpandClick, class: "selected-option" },
                h("span", { class: "selected-option__label" }, this.chosenOption.label),
                h("slot", { name: "dropdown-arrow" }, "Your icon here")),
            h("ul", { class: this.isExpanded ? 'options--expanded' : 'options' }, this.options.map(option => h("option", { onClick: this.onChange, class: "option", value: JSON.stringify(option) }, option.label)))));
    }
    static get is() { return "featured-dropdown"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "chosenOption": {
            "type": "Any",
            "attr": "chosen-option",
            "reflectToAttr": true,
            "mutable": true
        },
        "el": {
            "elementRef": true
        },
        "isExpanded": {
            "type": Boolean,
            "attr": "is-expanded",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["onIsExpandedChange"]
        },
        "onChangeHandler": {
            "type": "Any",
            "attr": "on-change-handler"
        },
        "options": {
            "type": "Any",
            "attr": "options",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "dropdownValueChanged",
            "method": "dropdownValueChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ":host,:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--light-gray:#d3d3d3;--gray:#a9a9a9;--black:#000;--white:#fff;--icon-dimension:25px;font-family:\"sans-serif, Helvetica\";font-size:14px;cursor:pointer;color:var(--black)}.dropdown{position:relative;border:1px solid var(--gray);border-radius:5px}.selected-option{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;padding:5px 10px}.options{display:none}.options--expanded{position:absolute;border:1px solid var(--gray);width:100%;display:block;padding:0;margin:0}.option{padding:10px;background:var(--white)}.option:hover{background:var(--light-gray)}::slotted(*){width:var(--icon-dimension);height:var(--icon-dimension)}"; }
}

export { FeaturedDropdown };
