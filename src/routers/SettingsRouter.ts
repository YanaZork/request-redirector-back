import express, { Router } from 'express';
import metodController from '../controllers/Database';

const router = Router();

// получить текущие настройки 
router.get('/', metodController);

//записать название стенда http://localhost:5000/settings/stant
router.post('/stand');



export default router;