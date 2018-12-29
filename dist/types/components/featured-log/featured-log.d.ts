import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class FeaturedLog {
    /**
     * This HTML element
     */
    el: HTMLElement;
    /**
     * Event emitted on every click
     */
    featuredLogClicked: EventEmitter;
    /**
     * Text visible on the button
     */
    label: string;
    private onClickHandler;
    render(): JSX.Element;
}
