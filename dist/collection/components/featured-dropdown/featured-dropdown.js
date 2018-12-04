export class FeaturedDropdown {
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
    static get style() { return "/**style-placeholder:featured-dropdown:**/"; }
}
