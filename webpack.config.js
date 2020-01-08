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
	module: {
		rules: [
			{
				test: /.js$/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: [ "@babel/preset-env", "@babel/preset-react" ],
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
