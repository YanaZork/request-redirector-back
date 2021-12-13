import express, { Request, Response, Application } from 'express';

const metodController = (req: Request, res: Response): void => {
    res.send(req.query.start);  
}

export default metodController;