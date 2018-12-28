export class FeaturedButton {
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
    static get style() { return "/**style-placeholder:featured-button:**/"; }
}
