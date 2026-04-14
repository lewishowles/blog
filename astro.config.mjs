// @ts-check

import mdx from "@astrojs/mdx";
import path from "node:path";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://example.com",
	integrations: [mdx(), sitemap()],
	vite: {
		resolve: {
			alias: {
				"@": path.resolve("./src")
			}
		}
	}
});
