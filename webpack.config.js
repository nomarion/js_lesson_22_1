const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    const isProd = argv.mode === 'production';

    return {
        entry: './src/main.js', // входной файл приложения
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true // очищает dist перед сборкой
        },
        module: {
            rules: [
                {
                    test: /\.js$/, // обработка JS
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                {
                    test: /\.s[ac]ss$/i, // SCSS -> CSS
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        require('autoprefixer')
                                    ]
                                }
                            }
                        },
                        'sass-loader'
                    ]
                },
                {
                    test: /\.css$/, // обычный CSS
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader'
                    ]
                }
            ]
        },
        optimization: {
            minimize: isProd, // минификация только в production
            minimizer: [
                new TerserPlugin(),       // минификация JS
                new CssMinimizerPlugin()  // минификация CSS
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'styles.css' // итоговый файл стилей
            }),
            new HtmlWebpackPlugin({
                template: './src/index.html', // твой шаблон
                filename: 'index.html',       // как назвать файл в dist
            })
        ],
        devServer: {
            static: './dist',
            hot: true,
            watchFiles: ['src/**/*'], // watcher
            port: 3000
        },
        devtool: isProd ? false : 'source-map'
    }
};