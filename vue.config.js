const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    externals: {
      vue: 'Vue',
      pinia: 'Pinia'
    },
    resolve: {
      fallback: {
        "fs": false,
        "path": false,
        "crypto": false
      }
    }
  },
  css: {
    extract: false
  }
})
