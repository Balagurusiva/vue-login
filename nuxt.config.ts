// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: ["nuxt-mongoose", "@nuxtjs/tailwindcss"],
	mongoose: {
		uri: process.env.MONGODB_URI,
		options: {},
		modelsDir: "models",
		devtools: true,
	},
	// axios: {
	// 	proxy: true,
	// },
	// proxy: {
	// 	"/api/": {
	// 		target: "https://eclectic-marigold-f6a930.netlify.app",
	// 		pathRewrite: { "^/api/": "" },
	// 		changeOrigin: true,
	// 	},
	// },
});
