// Dotenv Carga las variables de entorno del archivo .env
import {config} from 'dotenv'

// config() es un método proporcionado por el módulo dotenv para configurar los archivos env.
config()
export const MONGODB_URI = process.env.MONGODB_URI