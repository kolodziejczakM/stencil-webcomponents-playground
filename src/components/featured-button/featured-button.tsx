import { Component, Prop, Event, EventEmitter, Element } from '@stencil/core';

@Component({
    tag: 'featured-button',
    styleUrl: 'featured-button.css',
    shadow: true
})
export class FeaturedButton {
    /**
     * This HTML element
     */
    @Element() el: HTMLElement;

    /**
     * Event emitted on every click
     */
    @Event() featuredButtonClicked: EventEmitter;

    /**
     * Text visible on the button
     */
    @Prop({ reflectToAttr: true }) label = 'Click me';

    private onClickHandler = () => {
        this.featuredButtonClicked.emit();
    }

    render() {
        return (
            <button onClick={this.onClickHandler}>
                {this.label}
            </button>
        );
    }
}
