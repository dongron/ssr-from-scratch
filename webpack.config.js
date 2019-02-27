module.exports = {
    // how to bundle files
    entry: './src/index.js',
    // process
    module: {
        rules: [
            // data, process
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
        ]
    },
    // destination
    output: {
        filename: 'bundle.js',
        path: __dirname + 'public'
    }
}