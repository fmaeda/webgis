const proxy = require('http-proxy-middleware');

module.exports = app => {
  app.use(
    proxy('/ibama/api', {
      target: 'http://localhost:3033',
      // target: 'http://172.29.9.93:8080',
      // target: 'http://172.29.9.92:3033',
      pathRewrite: {
        '^/ibama/api': '/',
      },
    }),
  );
  app.use(
    proxy('/maptiles', {
      // target: 'http://10.1.8.80:9090',
      target: 'http://10.1.8.83:8080',
      changeOrigin: true,
      pathRewrite: {
        '^/maptiles': '/',
      },
    }),
  );
};
