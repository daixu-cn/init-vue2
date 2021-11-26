module.exports = {
  publicPath: "./", //基本路劲
  lintOnSave: false, //是否在保存的时候使用"eslint-loader"进行检查
  css: {
    loaderOptions: {
      scss: {
        data: `@import '@/assets/css/global.scss';`,
      },
    },
  },
  devServer: {
    overlay: {
      // 让浏览器 overlay 同时显示警告和错误
      warnings: true,
      errors: true,
    },
    host: "localhost",
    port: 8080, // 端口号
    https: false, // 是否支持https
    open: true, //配置自动启动浏览器
    hotOnly: true, // 热更新
    // proxy: {
    //   //配置多个跨域
    //   '/api': {
    //     target: 'https://daixu.cn',
    //     changeOrigin: true,
    //     // ws: true,//是否支持websocket
    //     secure: false,
    //     pathRewrite: {
    //       '^/': '',
    //     },
    //   },
    // },
  },
};
