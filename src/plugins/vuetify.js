// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import 'vuetify/lib/styles/main.sass'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const myCustomLightTheme = {
    dark: false,
    colors: {
      primary: '#ff002b',
    }
  }

export default createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'myCustomLightTheme',
        themes: {
          myCustomLightTheme,
        }
      }
  })

