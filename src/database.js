// Puedes conectarte a MongoDB con la función mongoose.connect()
import { connect} from 'mongoose'
import {MONGODB_URI} from './config'

( async ()=>{ //funcion inmediatemente  invocada
    try {
        const db = await connect(MONGODB_URI)
        console.log('Base de datos conectada en',db.connection.name)
    } catch (error) {
        console.log(error)
    }
})()