# Vue PDF Viewer

A Vue.js 3 component for viewing PDF documents using PDF.js. This package provides a complete PDF viewer with navigation controls and state management using Pinia.

## Features

- 📄 PDF document rendering using PDF.js
- 🔄 Page navigation (Previous/Next)
- 📊 Page counter display
- 🎨 Modern UI with Tailwind CSS
- 📱 Responsive design
- 🔧 Vue 3 Composition API support
- 🗃️ Pinia state management
- ⚡ Fast rendering with Web Workers

## Installation

```bash
npm install vue-pdf-viewer
```

## Peer Dependencies

This package requires Vue 3 and Pinia to be installed in your project:

```bash
npm install vue@^3.0.0 pinia@^2.0.0
```

## Quick Start

### 1. Install the package

```bash
npm install vue-pdf-viewer vue@^3.0.0 pinia@^2.0.0
```

### 2. Set up Pinia in your main.js

```javascript
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.mount('#app')
```

### 3. Use the component

```vue
<template>
  <div>
    <DocReader url="/path/to/your/document.pdf" />
  </div>
</template>

<script>
import { DocReader } from 'vue-pdf-viewer'

export default {
  components: {
    DocReader
  }
}
</script>
```

## Usage Options

### Basic Usage

```vue
<template>
  <DocReader url="/document.pdf" />
</template>
```

### With Custom Scale

```vue
<template>
  <DocReader url="/document.pdf" :scale="2.0" />
</template>
```

### Using the Store Directly

```vue
<template>
  <div>
    <DocReader url="/document.pdf" />
    <div>Current page: {{ doc_pageNumber }} of {{ pages }}</div>
  </div>
</template>

<script>
import { DocReader, usePdfStore } from 'vue-pdf-viewer'
import { storeToRefs } from 'pinia'

export default {
  components: {
    DocReader
  },
  setup() {
    const pdfStore = usePdfStore()
    const { doc_pageNumber, pages } = storeToRefs(pdfStore)
    
    return {
      doc_pageNumber,
      pages
    }
  }
}
</script>
```

### Plugin Installation

```javascript
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VuePdfViewer from 'vue-pdf-viewer'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.use(VuePdfViewer)
app.mount('#app')
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `url` | String | - | **Required.** URL or path to the PDF document |
| `scale` | Number/String | 1.5 | Scale factor for PDF rendering |

## Store API

The package includes a Pinia store (`usePdfStore`) with the following state:

### State Properties

- `pdfDocument`: The loaded PDF document object
- `pageNumber`: Current page number (1-based)
- `numPages`: Total number of pages in the document
- `pageRendering`: Boolean indicating if a page is currently rendering
- `pageNumIsPending`: Page number waiting to be rendered

### Getters

- `myDocument`: Returns the PDF document
- `doc_pageNumber`: Returns current page number
- `pages`: Returns total number of pages
- `isPageRendering`: Returns rendering status
- `isPageNumIsPending`: Returns pending page number

## Styling

The component uses Tailwind CSS classes. If you're not using Tailwind CSS in your project, you can:

1. Install Tailwind CSS:
```bash
npm install tailwindcss
```

2. Or override the styles by targeting the component classes in your CSS.

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Development

### Building the Package

```bash
npm run build:lib
```

This creates the distributable files in the `dist/` directory.

### Development Server

```bash
npm run serve
```

### Linting

```bash
npm run lint
```

## Requirements

- Vue 3.0+
- Pinia 2.0+
- Modern browser with Web Workers support

## License

ISC

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Credits

- [Faith Temko](https://signwithtemko.co.ke/)
- [Hudson Shkuku](https://esenta.co.ke/)
- Ivan Okello