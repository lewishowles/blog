import astro from "./config/eslint/astro.js";
import globals from "globals";
import pluginJs from "@eslint/js";
import stylistic from "./config/eslint/stylistic.js";
import typescript from "./config/eslint/typescript.js";

export default [
	{
		ignores: [".astro", "**/dist/*"],
	},

	{
		languageOptions: {
			globals: globals.browser,
		},
	},

	pluginJs.configs.recommended,

	stylistic,

	astro,

	typescript,
];
