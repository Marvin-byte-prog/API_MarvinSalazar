
import { getConnection, sql} from "../database/connection";
import { queries } from "./querys";

export const fechas = async (req, res) =>{
    const pool = await getConnection()
    const resultado = await pool.request().query('select * from Estadios')
    console.log(resultado.recordset)
    res.json(resultado.recordset)
};

export const nuevoEstadio = async (req, res) =>{
    const {NombreEstadio, Capacidad, Descripcion } = req.body;
    if(NombreEstadio == null || Capacidad == null || Descripcion == null){
        return res.status(400).json({msg: 'No valido. Rellene todos los campos'})
    }
    const pool = await getConnection();
    const resultado = await pool.request()
    .input('NombreEstadio', sql.NVarChar, NombreEstadio)
    .input('Capacidad', sql.Int, Capacidad)
    .input('Descripcion', sql.NVarChar, Descripcion)
    .query(queries.NuevoEstadio)
    res.json('Estadio Agregado')
};

export const BuscarEstadio = async (req,res)=>{
    const {id} = req.params
    const pool = await getConnection()
    
    const resultado = await pool.request().input('id', id).query(queries.BuscarEstadio)
    if(resultado.recordset[0] == undefined){
      return res.status(404).json({msg: 'Equipo no encontrado'})
    }
      console.log(resultado)
      res.send(resultado.recordset[0])
  };
  export const eliminarEstadio = async (req,res)=>{
    const {id} = req.params
    const pool = await getConnection()
    
    const resultado = await pool.request().input('id', id).query(queries.BorrarEstadio)
      res.send(resultado)
  };