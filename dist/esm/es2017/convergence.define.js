
// Convergence: Custom Elements Define Library, ES Module/es2017 Target

import { defineCustomElement } from './convergence.core.js';
import {
  FeaturedButton,
  FeaturedDropdown,
  FeaturedLog
} from './convergence.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    FeaturedButton,
    FeaturedDropdown,
    FeaturedLog
  ], opts);
}
