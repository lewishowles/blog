import css from "@eslint/css";

export default {
	files: ["**/*.css"],
	plugins: {
		css,
	},
	language: "css/css",
	extends: "css/recommended",
	rules: {
		"css/prefer-logical-properties": "error",
		"css/relative-font-units": "error",
	},
};
