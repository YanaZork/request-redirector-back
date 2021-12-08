import express from 'express';
import bodyParser from 'body-parser';
import DataRouter from './routers/DataRouter';
//import AwardRouter from './routers/AwardRouter';
//import PlayerRouter from './routers/PlayerRouter';
//import cors from 'cors';
//import PicturesController from './controllers/PicturesController';

class Server {
    private app;

    constructor() {
        this.app = express();
        this.config();
        this.routerConfig();
    }

    private config() {
        this.app.use(express.json());
 /*       this.app.use(cors({
            origin: "*"
        }));
*/
    }

    private routerConfig() {
        this.app.use('/batabase', DataRouter);
//        this.app.use('/award', AwardRouter);
  //      this.app.use('/player', PlayerRouter);
    //    this.app.use('/pictures/:filename', new PicturesController().get)
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