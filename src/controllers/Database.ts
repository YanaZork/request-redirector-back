import express, { Request, Response, Application } from 'express';

const metodController = (req: Request, res: Response): void => {
    res.send('работает');  
}

export default metodController;