/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import './stencil.core';


import {
  Option,
} from './components/featured-dropdown/interfaces';


export namespace Components {

  interface FeaturedDropdown {
    /**
    * Option that is shown as selected one.
    */
    'chosenOption': Option;
    'isExpanded': boolean;
    /**
    * Callback that will be called on every chosen option change
    */
    'onChangeHandler': Function;
    /**
    * List of selectable options that dropdown contains.
    */
    'options': Option[];
  }
  interface FeaturedDropdownAttributes extends StencilHTMLAttributes {
    /**
    * Option that is shown as selected one.
    */
    'chosenOption'?: Option;
    'isExpanded'?: boolean;
    /**
    * Callback that will be called on every chosen option change
    */
    'onChangeHandler'?: Function;
    /**
    * Event emitted on every option change
    */
    'onDropdownValueChanged'?: (event: CustomEvent) => void;
    /**
    * List of selectable options that dropdown contains.
    */
    'options'?: Option[];
  }
}

declare global {
  interface StencilElementInterfaces {
    'FeaturedDropdown': Components.FeaturedDropdown;
  }

  interface StencilIntrinsicElements {
    'featured-dropdown': Components.FeaturedDropdownAttributes;
  }


  interface HTMLFeaturedDropdownElement extends Components.FeaturedDropdown, HTMLStencilElement {}
  var HTMLFeaturedDropdownElement: {
    prototype: HTMLFeaturedDropdownElement;
    new (): HTMLFeaturedDropdownElement;
  };

  interface HTMLElementTagNameMap {
    'featured-dropdown': HTMLFeaturedDropdownElement
  }

  interface ElementTagNameMap {
    'featured-dropdown': HTMLFeaturedDropdownElement;
  }


}
