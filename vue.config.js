const compressionWebpackPlugin = require('compression-webpack-plugin');

// 直接配置路由
module.exports = {
    //关闭eslintre语法检查
    lintOnSave:false,
    // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
    productionSourceMap: false,

    configureWebpack: {
        // 配置不打包的东西
        // externals: {
        //     'vue': 'Vue',
        //     'vue-router': 'VueRouter',
        //     'vuex': 'Vuex',
        //     'element-ui': 'ELEMENT',
        //     'axios': 'axios',
        //     'lodash' : '_',
        //     "moment": "moment",
        //     "@moefe/vue-aplayer": "VueAPlayer"
        // },
        plugins: [
            new compressionWebpackPlugin({
                filename: '[path].gz[query]',
                algorithm: 'gzip',
                test: new RegExp('.(' + ['js', 'css'].join('|') + ')$'),
                threshold: 10240,
                deleteOriginalAssets: false
            })
        ]
    },

    // 配置插件
    chainWebpack: config => {
        // 删除预加载
        config.plugins.delete('preload');
        config.plugins.delete('prefetch');
    },

    devServer: {
        host: '0.0.0.0', // can be overwritten by process.env.HOST
        port: 8666, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        proxy: {
            '/apis': {
                target: 'http://8.142.67.178:8700',// 要跨域的域名
                changeOrigin: true, // 是否开启跨域
                pathRewrite: {
                    '^/apis': '/'
                }
            },
            '/varticle': {
                target: 'http://8.142.67.178:8712',// 要跨域的域名
                changeOrigin: true, // 是否开启跨域
                pathRewrite: {
                    '/varticle': '/'
                }
            },
            '/bfs': {
                target: 'https://211.95.34.2:443',// 要跨域的域名
                changeOrigin: true, // 是否开启跨域
                pathRewrite: {
                    '/bfs': '/'
                }
            }
        }
    }
}
