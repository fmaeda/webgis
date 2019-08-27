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
    proxy('/ibama/maptiles', {
      // target: 'http://10.1.8.62:8082',
      target: 'http://localhost:8080',
      changeOrigin: true,
      // secure: false,
      pathRewrite: {
        '^/ibama/maptiles': '/',
      },
    }),
  );
  app.use(
    proxy('/ibama/vector', {
      // target: 'http://10.1.8.62:8082',
      target: 'http://localhost:8081',
      changeOrigin: true,
      // secure: false,
      pathRewrite: {
        '^/ibama/vector': '/',
      },
    }),
  );
  app.use(
    proxy('/ibama/rebola', {
      // target: 'http://10.1.8.62:8082',
      target: 'http://10.1.8.213:8000',
      changeOrigin: true,
      // secure: false,
      pathRewrite: {
        '^/ibama/rebola': '/',
      },
      // onProxyReq: (proxyReq, req, res) => {
      //   console.log('req', req);
      // },
    }),
  );
};
