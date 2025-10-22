# Publishing Guide

## Prerequisites

1. Make sure you have an npm account
2. Login to npm: `npm login`

## Publishing Steps

### 1. Build the Package
```bash
npm run build:lib
```

### 2. Test the Package Locally
```bash
# Create a test directory
mkdir test-install
cd test-install

# Initialize a new project
npm init -y

# Install Vue and Pinia
npm install vue@^3.0.0 pinia@^2.0.0

# Install your package locally
npm install ../vue-pdf-viewer
```

### 3. Publish to npm
```bash
# From the vue-pdf-viewer directory
npm publish
```

### 4. Verify Installation
```bash
# In a new project
npm install vue-pdf-viewer
```

## Package Information

- **Package Name**: vue-pdf-viewer
- **Version**: 1.0.0
- **Main Files**: 
  - `dist/vue-pdf-viewer.umd.min.js` (74.72 KiB gzipped)
  - `dist/vue-pdf-viewer.common.js` (110.03 KiB gzipped)
- **Dependencies**: pdfjs-dist
- **Peer Dependencies**: vue@^3.0.0, pinia@^2.0.0

## Usage After Publishing

```bash
npm install vue-pdf-viewer vue@^3.0.0 pinia@^2.0.0
```

```javascript
import { DocReader } from 'vue-pdf-viewer'
// or
import VuePdfViewer from 'vue-pdf-viewer'
```
