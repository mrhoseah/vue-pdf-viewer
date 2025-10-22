import DocReader from './components/DocReader.vue'
import { usePdfStore } from './stores/usePdf'

// Export the component and store for use in other applications
export { DocReader, usePdfStore }

// Default export for easy importing
export default {
  install(app) {
    app.component('DocReader', DocReader)
  }
}

// Named exports for individual components
export { DocReader as VuePdfViewer }
