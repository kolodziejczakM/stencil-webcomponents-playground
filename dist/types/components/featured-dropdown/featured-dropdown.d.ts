import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
import { Option } from './interfaces';
export declare class FeaturedDropdown {
    /**
     * This HTML element
     */
    el: HTMLElement;
    /**
     * Event emitted on every option change
     */
    dropdownValueChanged: EventEmitter;
    isExpanded: boolean;
    /**
     * Option that is shown as selected one.
     */
    chosenOption: Option;
    /**
     * List of selectable options that dropdown contains.
     */
    options: Option[];
    /**
     * Callback that will be called on every chosen option change
     */
    onChangeHandler: Function;
    onIsExpandedChange(newValue: boolean): void;
    componentDidLoad(): void;
    componentDidUnload(): void;
    private onChange;
    private onExpandClick;
    private collapseExpansion;
    private onOutsideClick;
    render(): JSX.Element;
}
