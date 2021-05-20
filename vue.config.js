module.exports = {
  publicPath: './', //基本路劲
  lintOnSave: false, //是否在保存的时候使用"eslint-loader"进行检查
  devServer: {
    overlay: {
      // 让浏览器 overlay 同时显示警告和错误
      warnings: true,
      errors: true,
    },
    host: 'localhost',
    port: 8080, // 端口号
    https: false, // 是否支持https
    open: false, //配置自动启动浏览器
    hotOnly: true, // 热更新
    // proxy: {
    //   //配置多个跨域
    //   '/user': {
    //     target: 'http://127.0.0.1:3000',
    //     changeOrigin: true,
    //     // ws: true,//是否支持websocket
    //     secure: false,
    //     pathRewrite: {
    //       '^/': '',
    //     },
    //   },
    // },
  },
}
