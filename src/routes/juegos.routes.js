import { application, Router } from "express";
import '../controllers/juegos.controller'
import { agregarFecha, EliminarFecha, getCalendario } from "../controllers/juegos.controller";
const router = Router();

router.get('/calendario',getCalendario)

router.post('/calendario',agregarFecha)

router.delete('/calendario/:id',EliminarFecha )

export default router