const path = require("path");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlCriticalPlugin = require("html-critical-webpack-plugin");
const workboxPlugin = require('workbox-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const Webpack = require('webpack');

DIST_DIR = path.join(__dirname, "./public");

module.exports = merge(common, {
    plugins: [
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
        new Webpack.optimize.UglifyJsPlugin({
            compress: {
              drop_console: true,
            }
        }),
        new workboxPlugin.GenerateSW({
            globDirectory: DIST_DIR,
            skipWaiting: true,
            swDest: 'sw.js',
            runtimeCaching: [{
                urlPattern: new RegExp('https://pmcalabrese.github.io/pwa-preact'),
                handler: 'staleWhileRevalidate'
            }]
        }),
        new CompressionPlugin({
            asset: '[path].gz[query]'
        })
    ]
});