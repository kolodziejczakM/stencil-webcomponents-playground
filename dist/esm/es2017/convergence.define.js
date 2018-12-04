
// Convergence: Custom Elements Define Library, ES Module/es2017 Target

import { defineCustomElement } from './convergence.core.js';
import {
  FeaturedDropdown
} from './convergence.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    FeaturedDropdown
  ], opts);
}
