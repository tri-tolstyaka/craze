// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

// module.exports = {
//     entry: './app/index.tsx',
//     mode: 'development',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'index_bundle.js'
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(js)$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: "babel-loader",
//                     options: {
//                         presets: ['@babel/preset-env', '@babel/preset-react']
//                     }
//                 },
//             },
//             { test: /\.css$/, use: ['style-loader', 'css-loader'] },
//             {
//                 test: /\.tsx?$/,
//                 loader: "ts-loader",
//             },
//         ]
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: path.join(__dirname, 'app', 'index.html'),
//         })
//     ]
// }