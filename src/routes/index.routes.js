// Importamos el router que nos permite almacenar direcciones 
import { Router } from 'express'

import { loadTasks, 
    createTask,
    loadTaskEdit,
    editTask,
    deleteTask,
    handleDone } from '../controllers/taskController.js'

// Router(), crea el enrutamiento de las peticiones 
const router = Router()

router.get("/",loadTasks)
router.post("/tasks/add",createTask)
router.get("/edit/:id", loadTaskEdit)
router.post("/edit/:id",editTask)
router.get('/delete/:id',deleteTask)
router.get('/handleDone/:id',handleDone)

export default router