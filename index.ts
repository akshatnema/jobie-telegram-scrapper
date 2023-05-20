import express, { Express } from 'express';
import dotenv from 'dotenv';
import Logger from "./config/winston/index";
import morganMiddleware from './config/morgan';
import home from './routes/home'
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use('/', home)
app.use(morganMiddleware)

app.listen(port, () => {
  Logger.debug(`⚡️[server]: Server is running at http://localhost:${port}`)
});
