const path = require('path');
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
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // 多个loader从右到左处理
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: 'static/img/[name].[hash:7].[ext]' // 相对于output.path
        }
      }
    ],
  },
  //插件
  plugins: [new HtmlWebpackPlugin(
    {
        title: 'My App',
        filename: 'index.html',//生成页面（在output指定的path下）
        template:'index.html',//在根目录下查找作为模板页面
      }
  )],
  //开发服务器配置
  devServer: {
    
  },
  devServer: {
    // static: {
    //   directory: path.join(__dirname, 'public'),
    // },
    compress: true,
    port: 9000,
    open: true, // 自动打开浏览器
    
  },
};