// postcss.config.js
module.exports = ({ file }) => {
  return {
    plugins: {
      'postcss-px-to-viewport': {
        viewportWidth:
          file && file.dirname && file.dirname.includes('vant') ? 375 : 750,
        unitPrecision: 5, // 单位转换后保留的小数位
        viewportUnit: 'vw', // (String)指定需要转换成的视窗单位，默认vw
        fontViewportUnit: 'vw', // (String)指定字体需要转换成的视窗单位，默认vw
        selectorBlackList: [], // (Array) 指定不转换为视窗单位的类，保留px，值为string或正则regexp
        minPixelValue: 1, // (Number) 默认值1，小于或等于`1px`不转换为视窗单位
        mediaQuery: false // (Boolean) 是否在媒体查询时也转换px，默认false
      }
    }
  }
}
