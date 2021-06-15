module.exports = {
    chainWebpack: config => {
        config.plugin('html')
        .tap(args => {
          args[0].title = "prophet domain";
          return args;
        })
    },
    configureWebpack: config => {
        config.performance = {
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        }
    },
    css: {
        loaderOptions: {
            // 给 scss-loader 传递选项
            scss: {
                // @/ 是 src/ 的别名
                // 所以这里假设你有 `src/variables.sass` 这个文件
                // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
                // 注意: 这里之引入不会产生实际样式的scss|css 文件避免重复引入
                additionalData: `@import "~@/styles/color.scss"; @import "~@/styles/var.scss";`,
            },
        }
    },
    devServer: {
        disableHostCheck: true,
		historyApiFallback: true,
        host: "localhost",
        proxy: {
            '^/api': {
                target: 'http://test.aegis.finance',  // 'http://192.168.2.108:8080',
				changeOrigin: true,
				pathRewrite: { '/api' : '/api' }
            }
        }
    }
}
