import express, { Request, Response, Application } from 'express';

const app: Application = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response): void => {
    res.send("Hello Typescript with Node.js!")
});

app.listen(PORT, (): void => {
    console.log(`Server Running here 👉 https://localhost:${PORT}`);
});

function sum (num1:number, num2:number){
    return num1 + num2;
}
console.log(sum(8,4));