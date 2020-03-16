const path = require("path");

module.exports = {
    outputDir: path.resolve(__dirname, "./proinfra-cordova/www"),
    assetsDir: './',
    publicPath: '',

    pluginOptions: {
      cordovaPath: 'src-cordova'
    }
}
