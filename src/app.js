import express from 'express'
import config from './config'
import Equipo from './routes/equipo.routes' 
import Estadios from './routes/estadios.routes' 
import Calendario from './routes/juegos.routes'
import Resultados from './routes/resultados.routes'
const app = express()
app.set('port', config.port)

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(Equipo, Estadios, Calendario, Resultados);

export default app