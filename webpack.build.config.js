var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var ROOT_PATH = path.resolve(__dirname);

var publicPath = './';
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
    entry: {
        // vendor: [
        // ],
        build: ['./src/app/app.js'],
    },
    output: {
        path: path.resolve(ROOT_PATH, './dist'),
        publicPath:publicPath,                        //用于单独打包放到第三方平台时用
        filename: '[name]_[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: 'style-loader!css-loader!sass-loader',
                        sass: 'style-loader!css-loader!sass-loader?indentedSyntax',
                    },
                },
            },
            {
                test: /\.css$/, 
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:"css-loader?minimize"         
                })
            },
            {
                test: /\.scss$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:[
                        "css-loader?minimize",           
                        "sass-loader?includePaths[]=" + path.resolve(__dirname, "./node_modules/compass-mixins/lib")
                    ]   
                })
            },
            {
                test: /\.js$/,
                use:["babel-loader"],
                exclude:path.resolve(__dirname, "node_modules")
            },
            {
                test: /\.(png|jpg|gif|cur)$/,
                use: ["url-loader?limit=8192&name=images/[hash:8].[name].[ext]"]
            }, {
                test: /\.(woff|woff2|eot|ttf|otf|svg)(\?.*$|$)/,
                use: ["url-loader?importLoaders=1&limit=10000&name=/fonts/[name].[ext]"]
            },
            {
                test: /\.html$/,
                use:["html-withimg-loader?minimize"]
            }
        ]
    },
    // 开启source-map，webpack有多种source-map，在官网文档可以查到//cheap-module-source-map
    devtool: 'cheap-module-source-map',      
    externals: {
        jquery: "jQuery" //如果要全局引用jQuery，不管你的jQuery有没有支持模块化，用externals就对了。
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['.js', '.css','.vue', '.json'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            // jquery: 'jquery/jquery.min.js',
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            'scss_vars': '@/assets/common/styles.scss'
        }
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor'}),
        new webpack.optimize.CommonsChunkPlugin({name: 'mainifest', chunks: ['vendor']}),
        new ExtractTextPlugin({
            filename:"[name]_[chunkhash].css",
            disable:false,
            allChunks:true
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false  //默认false
        //     }
        // }),
        new webpack.optimize.UglifyJsPlugin({
            // 最紧凑的输出
            beautify: false,
            // 删除所有的注释
            comments: false,
            compress: {
              // 在UglifyJs删除没有用到的代码时不输出警告  
              warnings: false,
              // 删除所有的 `console` 语句
              // 还可以兼容ie浏览器
              drop_console: true,
              // 内嵌定义了但是只用到一次的变量
              collapse_vars: true,
              // 提取出出现多次但是没有定义成变量去引用的静态值
              reduce_vars: true,
            }
        }),
        new HtmlWebpackPlugin({
            template: 'html-withimg-loader!' + path.resolve(ROOT_PATH, './src/index.html'),
            filename: 'index.html'
        })
    ]
}
