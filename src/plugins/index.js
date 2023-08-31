/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'

import hljsVuePlugin from "@highlightjs/vue-plugin";
import 'highlight.js/styles/stackoverflow-light.css'
import 'highlight.js/lib/common';

export function registerPlugins(app) {
  loadFonts()

  app.use(vuetify)
  app.use(hljsVuePlugin)
}
