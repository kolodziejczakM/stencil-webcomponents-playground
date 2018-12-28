import { Component, Prop, Event, EventEmitter, Element, Watch } from '@stencil/core';
import { Option } from './interfaces';

@Component({
    tag: 'featured-dropdown',
    styleUrl: 'featured-dropdown.css',
    shadow: true
})
export class FeaturedDropdown {
    /**
     * This HTML element
     */
    @Element() el: HTMLElement;

    /**
     * Event emitted on every option change
     */
    @Event() dropdownValueChanged: EventEmitter;

    @Prop({ mutable: true, reflectToAttr: true})
    isExpanded: boolean = false;

    /**
     * Option that is shown as selected one.
     */
    @Prop({ mutable: true, reflectToAttr: true })
    chosenOption: Option = { label: '(no options)', value: null };

    /**
     * List of selectable options that dropdown contains.
     */
    @Prop({ mutable: true, reflectToAttr: true })
    options: Option[] = [];

    /**
     * Callback that will be called on every chosen option change
     */
    @Prop() onChangeHandler: Function

    @Watch('isExpanded')
    onIsExpandedChange(newValue: boolean) {
        console.log('New value of expanded is: : ', newValue);
    }

    // @State() isExpanded: boolean;

    componentDidLoad() {
        document.addEventListener('click', this.onOutsideClick);
    }

    componentDidUnload() {
        document.removeEventListener('click', this.onOutsideClick);
    }

    private onChange = (event): void => {
        const selectedOption = JSON.parse(event.target.getAttribute('value'));

        this.chosenOption = selectedOption;
        this.collapseExpansion();

        this.dropdownValueChanged.emit(selectedOption);
    }

    private onExpandClick = (): void => {
        if (this.options.length) {
            this.isExpanded = true;
        }
    }

    private collapseExpansion = (): void => {
        this.isExpanded = false;
    }

    private onOutsideClick = (event: UIEvent): void => {
        if (event.target !== this.el) {
            this.collapseExpansion();
        }
    }

    render() {
        return (
            <div class="dropdown">
                <div onClick={this.onExpandClick} class="selected-option">
                    <span class="selected-option__label">{this.chosenOption.label}</span>
                    <slot name="dropdown-arrow">Your icon here</slot>
                </div>
                <ul class={this.isExpanded ? 'options--expanded' : 'options'}>
                    {
                        this.options.map(
                            option =>
                                <option
                                    onClick={this.onChange}
                                    class="option"
                                    value={JSON.stringify(option)}
                                >
                                    {option.label}
                                </option>

                        )
                    }
                </ul>
            </div>
        );
    }
}
