
// Convergence: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './convergence.core.js';
import {
  FeaturedButton,
  FeaturedDropdown
} from './convergence.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    FeaturedButton,
    FeaturedDropdown
  ], opts);
}
