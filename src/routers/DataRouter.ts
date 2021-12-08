import express, { Router } from 'express';
import metodController from '../controllers/Database';

const router = Router();

router.get('/', metodController);


export default router;