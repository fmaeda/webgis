import { Request, Response } from 'express';

export default (req: Request, resp: Response) => {
  const data: [] = require('./data.json');

  resp.status(200).json(data.sort(() => Math.random() - 0.5));
};
