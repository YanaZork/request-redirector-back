import express, { Request, Response, Application } from 'express';
/*
import pool from '../dbconfig/dbconnector';

class GetDevices {
    public async getTopByGameId(req: any, res: any) {
        const client = await pool.connect();
        const sql = 'SELECT * FROM machines;';
        const { rows } = await client.query(sql);
        const name = rows;
        client.release();
        res.send(name);
    }    
}
*/
const metodController = (req: Request, res: Response): void => {
    res.send(rows);
}
const rows = [
    { id: '123', name: 'Станок 1' },
    { id: '1234', name: 'Станок 2' }
];
export default metodController;