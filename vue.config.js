// const isDev = process.env.NODE_ENV === 'development'
module.exports = {
  publicPath: '/',
  outputDir: process.env.NODE_ENV !== 'production' ? 'testBuild' : 'dist',
  assetsDir: 'assets', // 静态资源目录(js,css,img,fonts)这些文件都可以写里面
  productionSourceMap: false,
  devServer: {
    open: true, // 启动项目后自动开启浏览器
    // host: 'localhost', // 对应的主机名
    // port: 8080, // 端口号
    // https: false, // 是否开启协议名,如果开启会发出警告
    hot: true, // 热模块更新的一种东西,webpack中自动有过配置,但如果我们下载一些新的模块可以更好的给我更新一些配置
    proxy: {
    // 配置跨域
      '/api': { // 配置跨域的名字
        target: 'http//www.baidu.con/', // 跨域的地址
        ws: true,
        // 如果后端服务托管在虚拟主机的时候，也就是一个IP对应多个域名，需要通过域名区分服务，就要下面的
        changeOrigin: true,
        // 如果后端服务器使用无效的https证书，需要加上下面的
        secure: false,
        pathRewrite: { // 当前的名字
          '^/api': ''
        }
      }
    }
  }
}
