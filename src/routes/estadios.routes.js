import { application, Router } from "express";
import '../controllers/estadios.controller'
import { BuscarEstadio, eliminarEstadio, fechas, nuevoEstadio } from "../controllers/estadios.controller";

//import { obtenerEquipo, crearEquipo, BuscarEquipo, borrarEquipo } from "../controllers/equipos";
const router = Router();

router.get('/estadios',fechas)

router.post('/estadios',nuevoEstadio)

router.get('/estadio/:id',BuscarEstadio )

router.delete('/estadio/:id',eliminarEstadio )

export default router  