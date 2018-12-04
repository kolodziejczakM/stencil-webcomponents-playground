/*! Built with http://stenciljs.com */
const { h } = window.Convergence;

class FeaturedDropdown {
    constructor() {
        this.isExpanded = false;
        /**
         * Option that is shown as selected one.
         */
        this.chosenOption = { label: '(no options)', value: null };
        /**
         * List of selectable options that dropdown contains.
         */
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
    // @State() isExpanded: boolean;
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
    static get style() { return ":host,\n:host * {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n:host {\n    --light-gray: #d3d3d3;\n    --gray: #a9a9a9;\n    --black: #000;\n    --white: #fff;\n    --icon-dimension: 25px;\n\n    font-family: 'sans-serif, Helvetica';\n    font-size: 14px;\n    cursor: pointer;\n    color: var(--black);\n}\n\n.dropdown {\n    position: relative;\n    border: 1px solid var(--gray);\n    border-radius: 5px;\n}\n\n.selected-option {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n    -ms-flex-align: center;\n    align-items: center;\n    padding: 5px 10px;\n}\n\n.options {\n    display: none;\n}\n\n.options--expanded {\n    position: absolute;\n    border: 1px solid var(--gray);\n    width: 100%;\n    display: block;\n    padding: 0;\n    margin: 0;\n}\n\n.option {\n    padding: 10px;\n    background: var(--white);\n}\n\n.option:hover {\n    background: var(--light-gray);\n}\n\n::slotted(*) {\n    width: var(--icon-dimension);\n    height: var(--icon-dimension);\n}"; }
}

export { FeaturedDropdown };
