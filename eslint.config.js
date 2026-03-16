import css from "./config/eslint/css.js";
import globals from "globals";
import pluginJs from "@eslint/js";
import stylistic from "./config/eslint/stylistic.js";

export default [
	{
		ignores: ["**/dist/*"],
	},
	{
		languageOptions: {
			globals: globals.browser,
		},
	},
	pluginJs.configs.recommended,
	stylistic,
	css,
];
