const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PRODUCTION = process.env.NODE_ENV === "production";
const DEVELOPMENT = !PRODUCTION;

module.exports = {
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: process.env.NODE_ENV !== "production" ? "style-loader" : MiniCssExtractPlugin.loader,
					},
					{
						loader: "css-loader",
					},
					{
						loader: "sass-loader",
						options: { implementation: require("sass") },
					},
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		})
	]
};