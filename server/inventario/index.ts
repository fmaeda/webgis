import { Request, Response } from 'express';
import * as path from 'path';

const getInventario = (_: Request, resp: Response) => {
  // const filePath = path.join(__dirname + '/sample.csv');
  // const filePath = path.join(__dirname + '/inventario.csv');
  // resp.sendFile(filePath);
  const data = require('./inventarioPA.json');
  resp.json(data);
};

export default {
  getInventario,
};
