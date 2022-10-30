import { getConnection, sql } from "../database/connection";
import { queries } from "./querys";

export const obtenerResultado = async(req,res)=>{
    const pool = await getConnection()
    const resultado = await pool.request().query('select * from Resultados')
    console.log(resultado.recordset)
    res.json(resultado.recordset)
}