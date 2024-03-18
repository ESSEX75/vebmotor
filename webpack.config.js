const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.tsx",
    devServer: {
        port: 4100,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test:/\.bundle\.ts$/,
                use: {
                    loader: "bundle-loader",
                    options: {
                        name: "[name]",
                    }
                }
            },
            {
                test: /\.(css)$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }}]
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node-modules/
            },
            {
                test: /\.(svg|jpg|png|gif|ico)$/,
                exclude: /fonts/,
                use: "file-loader"
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: 'file-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        })
    ],

    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "build"),
        publicPath: "/"
    }

}
