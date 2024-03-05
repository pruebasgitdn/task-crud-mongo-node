import { Schema, model } from 'mongoose'

// New schema definimos los datos
const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    done:{
        type: Boolean,
        default: false
    }
},{
    timestamps: true,
    versionKey: false
})

//  model()  se utiliza para crear una colección de una base de datos 
export default model('Task',taskSchema)