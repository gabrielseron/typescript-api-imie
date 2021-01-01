import { config } from "dotenv";
import express from "express";
import {Response, Request} from 'express'

config();
const app = express();

app.listen(process.env.PORT, () =>
{
    console.log(`Running on port ${process.env.PORT}`);
})

app.get('/', (req: Request, res: Response) => 
{
  res.send('Hello Ts')
})