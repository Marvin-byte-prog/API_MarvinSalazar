import { application, Router } from "express";
import '../controllers/equipos'
import { obtenerEquipo, crearEquipo, BuscarEquipo, borrarEquipo } from "../controllers/equipos";
const router = Router();

router.get('/equipos',obtenerEquipo)

router.post('/equipos',crearEquipo)

router.get('/equipos/:id', BuscarEquipo)

router.delete('/equipos/:id', borrarEquipo)

export default router