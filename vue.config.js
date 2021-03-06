module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? './' : '/',  //根路径
  // outputDir: 'dist',  //构建输出目录
  assetsDir: 'assets',  //静态资源目录（js,css,img,fonts）
  configureWebpack: {
    resolve: {
      alias: { //给文件路径起别名
        'assets': "@/assets",
        'common': "@/common",
        'components': "@/components",
        'network': "@/network",
        'views': "@/views",
      }
    }
  },
  devServer: {
    proxy: {
      //配置跨域请求
      '/douban_api': {
        target: "https://movie.douban.com/",  //跨域地址
        // ws: true,
        pathRewrite: {
          '^/douban_api': ''   //重写接口
        },
        changeOrigin: true,     //是否跨域
      },
      '/api': {
        target: "http://api.douban.com/",  //跨域地址
        // ws: true,
        pathRewrite: {
          '^/api': ''   //重写接口
        },
        changeOrigin: true,     //是否跨域
      }
    }
  }
}
