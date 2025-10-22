# Test Package Installation

This is a simple test to verify that the vue-pdf-viewer package can be installed and used.

## Installation Test

```bash
# In a new directory, create a test project
mkdir test-vue-pdf-viewer
cd test-vue-pdf-viewer

# Initialize npm project
npm init -y

# Install Vue 3, Pinia, and our package
npm install vue@^3.0.0 pinia@^2.0.0

# Install our package locally (from the dist folder)
npm install ../vue-pdf-viewer/dist/vue-pdf-viewer.umd.min.js
```

## Usage Test

```vue
<template>
  <div id="app">
    <h1>Vue PDF Viewer Test</h1>
    <DocReader url="/test.pdf" />
  </div>
</template>

<script>
import { DocReader } from 'vue-pdf-viewer'

export default {
  name: 'App',
  components: {
    DocReader
  }
}
</script>
```

## Package Contents

The built package includes:
- `vue-pdf-viewer.umd.js` - UMD build for browsers
- `vue-pdf-viewer.umd.min.js` - Minified UMD build
- `vue-pdf-viewer.common.js` - CommonJS build for Node.js
- `pdf.worker.*.js` - PDF.js worker files
