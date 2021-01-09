import { config } from "dotenv";
import bodyParser from "body-parser";
import express from "express";
import {Response, Request} from 'express'
import cors from "cors";
import{ AuthentificationRoute } from "./src/routes/register";

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

app.use('/register', AuthentificationRoute);