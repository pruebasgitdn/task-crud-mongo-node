// Archivo para configurar la app
// Importamos el modulo del servidor
import express from 'express'
import './database.js'

// Importamos modulo para motor de plantillas
import {create} from 'express-handlebars'
import path from 'path' //Modulo de rutas de arhivos y carpetas
import indexRoutes from './routes/index.routes.js'
import morgan from 'morgan'


const app = express()


// Plantillas hbs

app.set('views',path.join(__dirname,"views"))

const exphbs = create({
    extname: '.hbs',
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout:'main',
  });
  

app.engine('.hbs',exphbs.engine)
app.set('view engine','.hbs')

// Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))

// Rutas
app.use(indexRoutes)

// Archivos estaticos
app.use(express.static(path.join(__dirname,"public")))

export default app