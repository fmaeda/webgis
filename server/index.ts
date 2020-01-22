import * as express from 'express';
// import * as bodyParser from 'body-parser';

import products from './products';
import inventario from './inventario';

const app: express.Application = express();

app.get('/teste', (req, res) => {
  res.status(200).json({
    status: 'ok',
  });
});

app.get('/products', products);
app.get('/inventario', inventario.getInventario);

app.listen(3033, () => {
  console.log('Example app listening on port 3033!');
});
