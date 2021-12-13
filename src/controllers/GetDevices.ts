import express, { Request, Response, Application } from 'express';

const metodController = (req: Request, res: Response): void => {
    res.send(rows);  
    res.send('работает'); 
}
const rows = [
        {id: '123', name: 'Станок 1'},
        {id: '1234', name: 'Станок 2'}
    ];
export default metodController;