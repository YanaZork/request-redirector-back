import express, { Request, Response, Application } from 'express';
import server from './server';

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response): void => {
    res.send("foo")
});

app.listen(PORT, (): void => {
    console.log(`👉 https://localhost:${PORT}`);
});

/*
import server from './server';
require('dotenv').config();

const port = parseInt(process.env.PORT || '4000');

const app = new server().start(port)
  .then(port => console.log(`Running on port ${port}`))
  .catch(error => {
    console.log(error)
  });

export default app;
*/