const PROXY_CONFIG =
  {
    '/api/*': {
      // target: 'https://enigmatic-cliffs-34872.herokuapp.com/',
      target: 'http://localhost:1337',
      pathRewrite: { '^/api/': '' },
      secure: false,
      changeOrigin: true,
      logLevel: 'debug'
    },
    '/uploads/*': {
      // target: 'https://enigmatic-cliffs-34872.herokuapp.com/',
      target: 'http://localhost:1337',
      // pathRewrite: { '^/api/': '' },
      secure: false,
      changeOrigin: true,
      logLevel: 'debug'
    }

  };
module.exports = PROXY_CONFIG;
