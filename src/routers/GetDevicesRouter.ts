import express, { Router } from 'express';
import metodController from '../controllers/GetDevices';

const router = Router();

router.get('/', metodController);

export default router;