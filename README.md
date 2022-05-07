# vue-pdf-viewer
## Intro
Inspired by PdfJs, vue-pdf-viewer is a vuejs component for reading pdf documents.
## Usage
Import the component in your project, it expects `url` of your pdf document. That's all
```
<template>
  <doc-reader url="../dropZone.pdf"/>

</template>

<script>
import DocReader from './components/DocReader.vue'

export default {
  name: 'App',
  components: {
    DocReader
  }
}
</script>
```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
### Credit
[Faith Temko](https://signwithtemko.co.ke/), [Hudson Shkuku](https://esenta.co.ke/), Ivan Okello
