const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "[name].[hash].bundle.js",
		chunkFilename: "[name].[contenthash].bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	resolve: {
		modules: [ "node_modules" ],
		extensions: [ ".js" ]
	},
	module: {
		rules: [
			{
				test: /.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: [ [ "@babel/preset-env", { useBuiltIns: "usage", corejs: 3 } ], "@babel/preset-react" ],
							plugins: [ "babel-plugin-syntax-dynamic-import" ]
						}
					}
				]
			}
		]
	},
	devServer: {
		contentBase: path.resolve("dist"),
		hot: true
	},
	plugins: [ new HTMLPlugin({ template: "public/index.html" }) ]
};
