import express, { Request, Response, Application } from 'express';

const currentSettings = (req: Request, res: Response): void => {
    res.send('работает');  
}

const updateStandeName = (req: Request, res: Response): void => {
    res.send('работает');  
}

export {currentSettings, updateStandeName};