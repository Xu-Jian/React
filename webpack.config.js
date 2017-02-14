
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

module.exports = {
    entry: [ path.resolve(__dirname, 'app/main.js')],

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },

    module: {
        loaders: [
        // JSX    
        {
            test: /\.jsx?$/,
            loader: 'babel-loader'
        },
        // css
        {
	    test: /\.css$/, 
        loader: 'style-loader!css-loader' 
	    },
        // LESS
        {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
        },
        // SASS
        {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
        },
        // base64
        {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=25000'
        },
        // 字体
        {
        test: /\.woff$/,
        loader: 'url-loader?limit=100000'
        }
    
        ],
        // noParse: [pathToReact],        
    }
};