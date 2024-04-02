// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: ["nuxt-mongoose", "@nuxtjs/tailwindcss",],
	mongoose: {
		uri: process.env.MONGODB_URI,
		options: {},
		modelsDir: "models",
		devtools: true,
	}, 
    routeRules: {
        'http://localhoat:3000/api/auth/**': {
            cors: false,
         },
         'https://vue-login-kohl.vercel.app/auth/**': {
            cors: false,
         },
    },
     
});
