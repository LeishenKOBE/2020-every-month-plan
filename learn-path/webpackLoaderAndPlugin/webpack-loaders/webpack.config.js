const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		publicPath: 'xuni',
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.css/,
				use: [
					{
						loader: path.resolve(__dirname, './loaders/style-loader.js'),
					},
				],
			},
			{
				test: /\.txt$/,
				use: [
					{
						loader: path.resolve(__dirname, './loaders/txt.loader.js'),
					},
				],
			},
		],
	},
	plugins: [],
	devtool: 'source-map',
	devServer: {
		port: 3000,
		contentBase: 'www',
	},
};
