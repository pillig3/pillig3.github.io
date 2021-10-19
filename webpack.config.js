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
			chomp: "./src/chomp.tsx",
			befunge: "./src/befunge.tsx",
			"befunge-info": "./src/befunge-info.tsx",
			misc: "./src/misc.tsx",
			comps: "./src/comps.tsx",
			pentris: "./src/pentris.tsx",
			complex: "./src/complex.tsx",
			"complex-info": "./src/complex-info.tsx",
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
					test: /\.(png|jpg|gif|webp)$/i,
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
			}),
			new HtmlWebpackPlugin({
				filename: "chomp.html",
				template: "./src/chomp.html",
				favicon: "favicon.ico",
				chunks: ["chomp"],
			}),
			new HtmlWebpackPlugin({
				filename: "befunge.html",
				template: "./src/befunge.html",
				favicon: "favicon.ico",
				chunks: ["befunge"],
			}),
			new HtmlWebpackPlugin({
				filename: "befunge-info.html",
				template: "./src/befunge-info.html",
				favicon: "favicon.ico",
				chunks: ["befunge-info"],
			}),
			new HtmlWebpackPlugin({
				filename: "misc.html",
				template: "./src/misc.html",
				favicon: "favicon.ico",
				chunks: ["misc"],
			}),
			new HtmlWebpackPlugin({
				filename: "comps.html",
				template: "./src/comps.html",
				favicon: "favicon.ico",
				chunks: ["comps"],
			}),
			new HtmlWebpackPlugin({
				filename: "pentris.html",
				template: "./src/pentris.html",
				favicon: "favicon.ico",
				chunks: ["pentris"],
			}),
			new HtmlWebpackPlugin({
				filename: "complex.html",
				template: "./src/complex.html",
				favicon: "favicon.ico",
				chunks: ["complex"],
			}),
			new HtmlWebpackPlugin({
				filename: "complex-info.html",
				template: "./src/complex-info.html",
				favicon: "favicon.ico",
				chunks: ["complex-info"],
			}),
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