const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');[]
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/index.js',
  },
  //模块加载器
  module: {
    rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         include: path.resolve(__dirname, 'src'),
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env']
//           }
//         }
//       },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets:[
              [
                '@babel/preset-env',{useBuiltIns:'usage','corejs':2} //配置async/await的编译环境这里需要安装yarn add @babel/runtime-corejs2
              ]
              ],
            plugins: [
              ["babel-plugin-component",
              {
                "libraryName": "mint-ui",
                "style": true
              }
            ]
          ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader',], // 多个loader从右到左处理
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: 'static/img/[name].[hash:7].[ext]' // 相对于output.path
        }
      },
      {
        test: /\.vue$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'vue-loader'
      },
      
    ],
  },
  //插件
  plugins: [new HtmlWebpackPlugin(
    {
        title: 'My App',
        filename: 'index.html',//生成页面（在output指定的path下）
        template:'index.html',//在根目录下查找作为模板页面
      }
  ),new VueLoaderPlugin()],
  //开发服务器配置
  devServer: {
    // static: {
    //   directory: path.join(__dirname, 'public'),
    // },
    compress: true,
    port:8000,
    open: true, // 自动打开浏览器
    
  },
   // 引入模块的解析 模块路径 路径别名
   resolve: {
    extensions: ['.js', '.vue', '.json'], // 可以省略的后缀名
    alias: { // 路径别名(简写方式)
      'vue$': 'vue/dist/vue.esm.js',  // 表示精准匹配 from 'vue'
      '@':path.resolve(__dirname,'src') //设置使用直接回到根目录下的src目录下
    }
  },
};
