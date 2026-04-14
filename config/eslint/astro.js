import astroParser from "astro-eslint-parser";
import astroPlugin from "eslint-plugin-astro";

export default {
	files: ["**/*.astro"],

	languageOptions: {
		parser: astroParser,
		parserOptions: {
			parser: "@typescript-eslint/parser",
			extraFileExtensions: [".astro"],
		},
	},

	plugins: {
		astro: astroPlugin,
	},

	rules: {
		quotes: ["error", "double", { avoidEscape: true }],
	},
};
