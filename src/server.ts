import express from 'express';
import GetDevicesRouter from './routers/GetDevicesRouter';
import cors from 'cors';

class Server {
    private app;

    constructor() {
        this.app = express();
        this.config();
        this.routerConfig();
    }

    private config() {
        this.app.use(express.json());
        this.app.use(cors({
            origin: "*"
        }));

    }

    private routerConfig() {
        this.app.use('/getdevices', GetDevicesRouter);
    }

    public start = (port: number) => {
        return new Promise((resolve, reject) => {
            this.app.listen(port, () => {
                resolve(port);
            }).on('error', (err: Object) => reject(err));
        });
    }
}

export default Server;