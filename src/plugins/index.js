/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'

import hljs from 'highlight.js/lib/core'
import hljsVuePlugin from "@highlightjs/vue-plugin"

import 'highlight.js/styles/stackoverflow-light.css'

import xml from 'highlight.js/lib/languages/xml'
import javascript from 'highlight.js/lib/languages/javascript'
import json from 'highlight.js/lib/languages/json'
import plaintext from 'highlight.js/lib/languages/plaintext'
import yaml from 'highlight.js/lib/languages/yaml'

hljs.registerLanguage('xml', xml)
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('json', json)
hljs.registerLanguage('plaintext', plaintext)
hljs.registerLanguage('yaml', yaml)

export function registerPlugins(app) {
  loadFonts()

  app.use(vuetify)
  app.use(hljsVuePlugin)
}
