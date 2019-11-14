const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.resolve(__dirname, "public")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [{ loader: "style-loader" }, { loader: "css-loader" }]
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8000, // Convert images < 8kb to base64 strings
                            name: "images/[hash]-[name].[ext]"
                        }
                    }
                ]
            }
        ]
    }
};
