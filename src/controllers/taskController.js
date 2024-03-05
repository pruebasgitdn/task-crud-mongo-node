import Task from '../models/task.js'

export const loadTasks = async (req,res)=>{
    
    // await espera que el find() traiga los elementos de la tabla,lean(), los documentos se devuelven como objetos planos.  y lo almacena el tasks
    const tasks = await Task.find().lean()

    // Aca tambien pasamos la variable como key value para listar los datos
    res.render('index', { tasks: tasks})
}

export const createTask = async (req,res)=>{
    const task = Task(req.body)

    // await espera que guarde
    await task.save()
    res.redirect('/')
}

export const loadTaskEdit = async(req,res)=>{
    // Obtenemos el id y nos dirige al form edit con sus datos anteriores

    const task = await Task.findById(req.params.id).lean()

    // Aca estara la ejecucion de la ruta de abajo post
    res.render('edit',{task: task})
}

export const editTask = async(req,res)=>{
    // del req params cojemos el id
    const {id} = req.params

    // Espreramos que encuentre por el id del req.params, y reemplace por el req.body
    await Task.findByIdAndUpdate(id,req.body)
    res.redirect('/')
}

export const deleteTask = async(req,res)=>{
    const {id} = req.params
    // Esperamos a que encuentre por el id y lo borra
    await Task.findByIdAndDelete(id)
    res.redirect("/")
}

export const handleDone = async(req,res)=>{

    const {id} = req.params
    const task = await Task.findById(id)
    // Si esta true a false, y si esta false a true
    task.done = !task.done

    // Guardamos cambios
    await task.save()
    // Redireccion
    res.redirect('/')

}