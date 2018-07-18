

var path = require("path");
var webpack = require("webpack")
var  htmlWebpackPlugin =  require("html-webpack-plugin");  // 操作index.html  
var openBrowserWebpackPlugin = require("open-browser-webpack-plugin");    //  自动打开浏览器 
var ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");  // 抽离样式 css文件



module.exports = {
    entry:["./src/index.js"] ,    //入口文件  多个入口文件 合并  
    devtool:"source-map",     // 方便调试 

    output:{   // 打包文件 
        path:path.resolve(__dirname,"dist"),
        filename:"js/[name].[hash:8].js",  //  hash:8  md5加密  以文件的内容执行md5加密 生成的hash 8个长度的随机字符串 防止缓存 
        publicPath:"/"   //自动注入目录  
    },

    // 打包  js/css/png  iconfont 
    // [0-9]
    // g   i 
    module:{
        // loaders:
        rules:[
            {
                test:/\.js[x]?$/,
                use:["babel-loader"],
                exclude:[path.resolve(__dirname,"node_modules")]
            },
            {
                test:/\.(css|scss)$/,
                use:ExtractTextWebpackPlugin.extract({
                    fallback:"style-loader",   // 转成node 风格的js代码
                    use:["css-loader",{    // css-loader 打包成模块  
                        loader:"postcss-loader",
                        options:{
                            plugins:function(){
                                return [
                                    require("cssgrace"),     // 美化代码 
                                    // require("postcss-px2rem")({remUnit:100}),// px转rem
                                    require("postcss-px2rem-exclude")({
                                        remUnit: 100,
                                        exclude: /mint-ui/i 
                                      }),
                                    require("autoprefixer")()    // 自动补全 
                                ]
                            }
                        }
                    },"sass-loader"] // "sass文件编译 "
                })
            },
            {
                test:/\.(gif|jpg|png|woff|woff2|svg|eot|ttf)\??.*$/,
                use:["url-loader?limit=8192&name=font/[hash:8].[ext]"]
            },
            // vue-loader
            {
                test:/\.vue$/,
                loader:"vue-loader",
                options:{
                    loaders:[
                        {"css":"style-loader!css-loader"},
                        {"scss":"style-loader!css-loader!sass-loader"},
                        {"less":"style-loader!css-loader!less-loader"},
                    ],
                    postcss: function () {
                        return [require("postcss-px2rem-exclude")({
                            remUnit: 100,
                            exclude: /mint-ui/i 
                          })
                        ];
                    }
                }
            }
        ]
    },

    // webpack-dev-server 配置 
    devServer:{
        contentBase:path.join(__dirname,"dist"),  //服务器打开目录  启动目录 
        compress:true,
        hot:true,
        host:"0.0.0.0",
        port:7000,
        publicPath:"/",   
        historyApiFallback: true,    // html5 history api 
        disableHostCheck: true,
    },
    
    resolve: {
		alias: {   //别名
		'vue': 'vue/dist/vue.js'
		}
	},
    // 插件  plugins
    plugins:[
        // 自动打开浏览器 
        new openBrowserWebpackPlugin({
            url:"http://localhost:7000"
        }),

        // 
        new htmlWebpackPlugin({
            template:"./src/index.html",   // index.html
            inject:true,    // 自动注入  js/css
        }),

        // 抽离样式

        new ExtractTextWebpackPlugin({
            filename:"app.[hash:8].css",   
            allChunks:true,
            disable:false 
        }),
        // 自动刷新  热替换 
        new webpack.HotModuleReplacementPlugin()
    ]
}