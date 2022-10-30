
import { getConnection, sql} from "../database/connection";
import { queries } from "./querys";

export const obtenerEquipo = async (req, res) => {
  const pool = await getConnection();
  const conn = await pool.request().query(queries.ObtenerEquipo);
  //console.log(conn.recordset[1].NombreEquipo) 
  //const equipo = conn.recordset[1]
  res.json(conn.recordset);
};

export const crearEquipo = async (req, res)=>{
  const {NombreEquipo, Ranking, CopasGanadas, Informacion, CodigoGrupo} = req.body;
  if(NombreEquipo==null||Ranking==null||CopasGanadas==null||Informacion==null || CodigoGrupo==null){
    return res.status(400).json({msg: 'No valido. Rellene todos los campos'})
  }
  const pool = await getConnection()
  await pool.request()
  .input('NombreEquipo',sql.NVarChar, NombreEquipo )
  .input('Ranking', sql.Int, Ranking)
  .input('CopasGanadas', sql.Int, CopasGanadas)
  .input('Informacion', sql.NVarChar, Informacion)
  .input('CodigoGrupo', sql.Int, CodigoGrupo)
  .query(queries.NuevoEquipo)
  
  res.json('equipo Agregado') 
};

export const BuscarEquipo = async (req,res)=>{
  const {id} = req.params
  const pool = await getConnection()
  
  const resultado = await pool.request().input('id', id).query(queries.BuscarEquipo)
  if(resultado.recordset[0] == undefined){
    return res.status(404).json({msg: 'Equipo no encontrado'})
  }
    console.log(resultado)
    res.send(resultado.recordset[0])
};

export const borrarEquipo = async (req,res)=>{
  const {id} = req.params
  const pool = await getConnection()
  
  const resultado = await pool.request().input('id', id).query(queries.borrarEquipo)
  console.log(resultado)
  res.send(resultado)
}; 