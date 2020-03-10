module.exports = {
  publicPath: "./",
  outputDir: "dist",
  lintOnSave: false,
  devServer: {
    open: true, //设置自动打开
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: "http://zuul.cidikeji.cn/",
        changeOrigin: true,
        secure: false, //如果是http接口，需要配置该参数
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: ""
        }
      }
    }
  }
}
