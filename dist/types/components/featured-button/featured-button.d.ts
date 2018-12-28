import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class FeaturedButton {
    /**
     * This HTML element
     */
    el: HTMLElement;
    /**
     * Event emitted on every click
     */
    featuredButtonClicked: EventEmitter;
    /**
     * Text visible on the button
     */
    label: string;
    private onClickHandler;
    render(): JSX.Element;
}
