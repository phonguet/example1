module.exports = {
    output: {
        path: __dirname,
        filename: "main.bundle.js"
    },
    entry: "./src/index.js",
    mode: "development",
    module: {
        rules: [{
            test: /\.js$/,
            use: ["babel-loader"]
        }, {
            test: /\.less$/,
            use: ["style-loader", "css-loader", "less-loader"]
        }]
    }
}