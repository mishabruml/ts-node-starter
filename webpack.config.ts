import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { Configuration } from 'webpack';

const config: Configuration = {
	context: __dirname,
	entry: './src/hello-world',
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					transpileOnly: true, // Disable type checker - we will use it in fork plugin
				},
			},
		],
	},
	mode: 'production',
	plugins: [
		new ForkTsCheckerWebpackPlugin(),
	],
	output: {
		filename: 'bundle.js',
	},
};

export default config;
