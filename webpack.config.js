const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const process = require("process");
const { merge } = require("webpack-merge");

const sassConfig = require("./webpack.sass.config");
const PRODUCTION = process.env.NODE_ENV === "production";
const DEVELOPMENT = !PRODUCTION;

module.exports = merge(
	{
		name: "app",
		mode: "development",
		entry: {
			index: "./src/index.tsx",
			problems: "./src/problems.tsx",
		},
		devtool: DEVELOPMENT ? "inline-source-map" : false,
		dependencies: ["vendor"],
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: "ts-loader",
					exclude: /node_modules/
				},
				// {
				// 	test: /\.katex.min.js?$/,
				// 	loader: "script-loader",
				// 	exclude: /node_modules/,
				// 	options: {
				// 		name: 'katex.min.js',
				// 	},
				// },
				{
					test: /\.(png|jpe?g|gif|webp)$/i,
					loader: "file-loader",
					exclude: /node_modules/,
					options: {
						name: './images/[name].[ext]',
					},
      	},
			]
		},
		resolve: {
			extensions: [".tsx", ".ts", ".js"],
			alias: {
				"react-dom": "@hot-loader/react-dom",
			},
		},
		output: {
			filename: "[name].js",
			path: path.resolve(__dirname, "dist"),
			assetModuleFilename: 'images/[hash][ext][query]'
		},
		devServer: {
			hot: true
		},
		plugins: [
			new HtmlWebpackPlugin({
				filename: "index.html",
				template: "./src/index.html",
				favicon: "favicon.ico",
				chunks: ["index"]
			}),
			new HtmlWebpackPlugin({
				filename: "problems.html",
				template: "./src/problems.html",
				favicon: "favicon.ico",
				chunks: ["problems"],
			})
		],
		optimization: {
			minimize: PRODUCTION,
			splitChunks: {
				cacheGroups: {
					vendors: {
						test: /[\\/]node_modules[\\/]/i,
						name: "vendors",
						chunks: "all"
					}
				}
			},
			runtimeChunk: {
				name: "vendors"
			},
			moduleIds: "named"
		}
	},
	sassConfig
)