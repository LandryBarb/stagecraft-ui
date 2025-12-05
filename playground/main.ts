import { createApp } from 'vue'
import App from './App.vue'

// Import your library source directly
import * as StagecraftUI from '../src'

// Import global styles & design tokens
import '../src/styles/tokens.css'
import '../src/styles/reset.css'
import '../src/styles/master.css'

const app = createApp(App)

// Auto-register all components exported from the library
Object.entries(StagecraftUI).forEach(([name, component]) => {
  // Only register Vue components
  if (typeof component === 'object') app.component(name, component)
})

app.mount('#app')
