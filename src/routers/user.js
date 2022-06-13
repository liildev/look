import { Router } from "express";
import usersController from '../controller/users.js'
import validation from "../middlewares/users.js";
const router = Router()

router.get('/users', usersController.GET)
router.post('/users', validation, usersController.POST)


export default router