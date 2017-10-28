const path = require("path");
const webpack = require("webpack");
const DIST_DIR = path.join(__dirname, "./public");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const workboxPlugin = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const HtmlCriticalPlugin = require("html-critical-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash:8].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: {
        "js/home": "./src/home.tsx",
        "css/home.style": "./src/styles/home.style.scss"
    },
    output: {
        path: DIST_DIR,
        filename: "[name].bundle.[chunkhash:8].js"
    },
    plugins: [
        extractSass,
        new CopyWebpackPlugin([
            { from: './src/manifest.json' },
            // { from: './src/index.html' },
            { from: './src/assets/**' },
        ]),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            // (the commons chunk name)

            filename: "js/commons.[chunkhash:8].js"
            // (the filename of the commons chunk)
        }),
        new HtmlWebpackPlugin({
            inject: true,
            title: 'PWA Preact',
            preload: ['commons', 'js/home', 'css/home.style'],
            template: './src/index.ejs', // Load a custom template (ejs by default see the FAQ for details)
            chunks: ['commons', 'js/home', 'css/home.style']
        }),
        new HtmlCriticalPlugin({
            base: DIST_DIR,
            src: 'index.html',
            dest: 'index.html',
            inline: true,
            minify: true,
            extract: true,
            width: 1200,
            height: 1200,
            penthouse: {
                blockJSRequests: false,
            }
        }),
        new workboxPlugin({
            globDirectory: DIST_DIR,
            globPatterns: ['**/*.{html,js,css}'],
            swDest: path.join(DIST_DIR, 'sw.js'),
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                'es2015',
                                "preact"
                            ],
                            plugins: [
                                [
                                    "transform-class-properties",
                                    'transform-react-jsx',
                                    { pragma: 'h' },
                                ]
                            ]
                        }
                    },
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader", options: {
                            minimize: true,
                            sourceMap: true
                        }
                    }, {
                        loader: "sass-loader", options: {
                            minimize: true,
                            sourceMap: true
                        }
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }
        ]
    }
    , resolve: {
        extensions: ['.ts', '.tsx', '.js']
    }
};