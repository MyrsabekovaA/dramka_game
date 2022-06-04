const { defineConfig } = require('@vue/cli-service')
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: path.resolve(__dirname, "../MyrsabekovaA.github.io"),
  // assetsDir: "C:\\Project\\dramka_project"
})
