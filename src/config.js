const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiBaseUrl: process.env.API_URL || 'https://api.github.com',
  app: {
    googleAnalytics: {
      appId: process.env.GOOGLE_ANALYTIC_ID || 'UA-XXXXXXXX-X'
    },
    title: 'React Universal Saga Modular',
    description: 'Application used to predict the health effects arising from exposure to various chemicals.',
    head: {
      titleTemplate: 'PLETHEM',
      meta: [
        { name: 'description', content: 'Application used to predict the health effects arising from exposure to various chemicals.' },
        { charset: 'utf-8' },
        { property: 'og:site_name', content: 'PLETHEM' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:title', content: 'PLETHEM' },
        { property: 'og:description', content: 'Application used to predict the health effects arising from exposure to various chemicals.' },
        { property: 'og:card', content: 'summary' }
      ]
    }
  },
}, environment);
