import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import PurifyCSSPlugin from 'purifycss-webpack';
import ParallelUglifyPlugin from 'webpack-parallel-uglify-plugin';
import Clean from 'clean-webpack-plugin';
import path from 'path';
import fs from 'fs';
import glob from 'glob';
import HappyPack from 'HappyPack';
import os from 'os';

import urlConfig from './config.json';

//配置基础路径
const basePath = path.resolve(__dirname, 'src');
const outPath = path.join(__dirname, 'dist');

//配置多线程
const happyThreadPool = HappyPack.ThreadPool({
    size: os.cpus().length
});

//根据配置文件生成对应的base_url文件
const urlData = () => {
    return `const baseUrl = '${urlConfig[process.env.NODE_ENV]}'; export default baseUrl;`;
};

fs.writeFileSync(`${basePath}/js/common/base_url.js`, urlData());

// 获取本地IP地址
// const getIP = () => {
//     let net = os.networkInterfaces().en0;
//     let IP = '';

//     // 如果是windows系统，ip地址要另外获取
//     if (os.platform() == 'win32') {
//         // console.log('windows ip 地址-----')
//         for (const key in os.networkInterfaces()) {
//             net = os.networkInterfaces()[key];
//             // console.log(key, '==============')
//             // console.log(net)
//             break
//         }
//     }
//     // console.log('=====================================================')

//     net.forEach((v, i) => {
//         if (net[i].family === 'IPv4') {
//             IP = net[i].address
//         }
//     });
//     return IP
// };

// defaults 要可修改配置参数
let defaults = {
    devServer: {
        contentBase: outPath,
        clientLogLevel: 'none',
        historyApiFallback: true
        // host: getIP(),
        // host: '10.10.164.124',
        // port: 8080
    },
    entry: {
        common: ['scss/reset.scss', 'utils'],
        index: 'js/index.js'
    },
    resolve: {
        modules: [basePath, 'node_modules'],
        alias: {
            utils: `${basePath}/js/common/utils.js`
        }
    },
    ProvidePlugin: new webpack.ProvidePlugin({
        utils: 'utils'
    }),
    HtmlPlugin: [
        new HtmlWebpackPlugin({
            filename: 'index.html', // 生成的html存放路径，相对于path
            cache: false,
            template: './index.html', // html模板路径
            inject: 'true', // js插入的位置，true/'head'/'body'/false
            // hash: true, //为静态资源生成hash值
            chunks: ['runtime', 'common', 'index'] // 需要引入的chunk，不配置就会引入所有页面的资源
        })
    ],
    CopyWebpackPlugin: new CopyWebpackPlugin([
        //目录拷贝
        {
            from: 'resouce',
            to: 'resouce'
        }
    ])
};

console.log(glob.sync(basePath + '/*.html'));

let ExtractSCSS = new ExtractTextPlugin({
        filename: 'css/[name].[hash:20].css',
        disable: false,
        allChunks: true
    }),
    PurifyCSS = new PurifyCSSPlugin({
        paths: glob.sync(basePath + '/*.html')
    }),
    HappyPackPluginJs = new HappyPack({ //开启多线程打包
        id: 'js',
        verbose: false,
        loaders: ['babel-loader'],
        threadPool: happyThreadPool
    }),
    HappyPackPluginSCSS = new HappyPack({ //开启多线程打包
        id: 'scss',
        verbose: false,
        loaders: ['css-loader', 'sass-loader'],
        threadPool: happyThreadPool
    }),
    config = {
        mode: process.env.NODE_ENV === 'dev' ? 'development' : 'production',
        context: basePath,
        target: 'web',
        // cache: true,
        entry: defaults.entry,
        output: {
            path: outPath, // 输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
            filename: 'js/[name].[hash].js', // 每个页面对应的主js的生成配置
            publicPath: '/',
            chunkFilename: 'js/[name].[hash].js',
            sourceMapFilename: 'js/[name].map'
        },
        watch: process.env.NODE_ENV === 'dev' ? true : false,
        watchOptions: {
            aggregateTimeout: 500,
            poll: 1000,
            ignored: /node_modules/
        },
        optimization: {
            runtimeChunk: {
                name: 'runtime'
            },
            splitChunks: {
                cacheGroups: {
                    commons: {
                        chunks: 'async',
                        name: 'common',
                        minChunks: 2,
                        maxAsyncRequests: 5,
                        maxInitialRequests: 3,
                        minSize: 0
                    }
                }
            }
        },
        devServer: process.env.NODE_ENV === 'dev' ? defaults.devServer : {},
        plugins: [
            new webpack.HashedModuleIdsPlugin(),
            ExtractSCSS, // 单独使用link标签加载css并设置路径，相对于output配置中的publickPath
            // PurifyCSS, //css Tree-Shaking技术使用
            HappyPackPluginJs,
            HappyPackPluginSCSS,
            new Clean('dist', {
                verbose: true
            })
        ],
        resolve: defaults.resolve,
        module: {
            rules: [{
                test: /\.(png|jpg|gif|svg|webp|ttc|ttf|eot|woff)$/,
                include: basePath,
                use: [{
                    loader: 'file-loader',
                    options: {
                        limit: 1000,
                        // useRelativePath: true,
                        // outputPath: './img',
                        publicPath: '../',
                        name: 'img/[name].[hash:20].[ext]'
                    }
                }]
            }, {
                test: /\.html$/,
                include: basePath,
                use: ['html-loader']
            }, {
                test: /\.js$/,
                include: basePath,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react', 'stage-1']
                    }
                }
            }, {
                // 编译SCSS生成link链接
                test: /\.scss$/,
                // include: basePath,
                use: ExtractSCSS.extract({
                    fallback: 'style-loader',
                    use: 'happypack/loader?id=scss'
                })
            }]
        }
    };

config.plugins.push(...defaults.HtmlPlugin, defaults.ProvidePlugin, defaults.CopyWebpackPlugin);

let loaderOptionsPlugin = new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
    options: {
        context: __dirname
    }
});

if (process.env.NODE_ENV !== 'dev') {
    config.plugins.push(loaderOptionsPlugin, new ParallelUglifyPlugin({
        test: /\.js($|\?)/i,
        exclude: /node_modules/,
        uglifyJS: {
            output: {
                beautify: false, //不需要格式化
                comments: false //不保留注释
            },
            compress: {
                warnings: false, // 在UglifyJs删除没有用到的代码时不输出警告
                drop_console: true, // 删除所有的 `console` 语句，可以兼容ie浏览器
                collapse_vars: true, // 内嵌定义了但是只用到一次的变量
                reduce_vars: true // 提取出出现多次但是没有定义成变量去引用的静态值
            }
        }
    }));
}

export default config;