import { json } from "express";
import { getConnection, sql} from "../database/connection";
import { queries } from "./querys";

export const getCalendario = async (req,res) =>{
    const pool = await getConnection()
    const resultado = await pool.request().query('Select * from Juegos')
    res.json(resultado.recordset)
    
}   

export const agregarFecha = async (req, res)=>{
    const {Fecha, Hora, CodigoEquipo,CodigoEquipo2, CodigoEstadio, CodigoGrupo} = req.body;
    if(Fecha==null||Hora==null||CodigoEquipo==null||CodigoEquipo2==null || CodigoEstadio==null || CodigoGrupo == null){
      return res.status(400).json({msg: 'No valido. Rellene todos los campos'})
    }
    const pool = await getConnection()
    await pool.request()
    .input('Fecha',sql.Date, Fecha )
    .input('Hora', sql.Time, Hora)
    .input('CodigoEquipo', sql.Int, CodigoEquipo)
    .input('CodigoEquipo2', sql.Int, CodigoEquipo2)
    .input('CodigoEstadio', sql.Int, CodigoEstadio)
    .input('CodigoGrupo', sql.Int, CodigoGrupo)
    .query(queries.AgregarFecha)
    
    res.json('Fecha Agregada') 
  };

  export const EliminarFecha = async (req,res)=>{
    const {id} = req.params
    const pool = await getConnection()
    
    const resultado = await pool.request().input('id', id).query(queries.EliminarFecha)
   
      console.log(resultado)
      res.send(resultado)
  };