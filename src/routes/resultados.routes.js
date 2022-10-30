import '../controllers/resultados.controllers'
import { obtenerResultado } from '../controllers/resultados.controllers';
import { Router } from 'express';
const router = Router();

router.get('/resultado',obtenerResultado)
router.post('/resultado')
router.delete('/resultado')

export default router