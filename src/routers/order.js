import { Router } from "express";
import ordersController from '../controller/orders.js'

const router = Router()


router.get('/orders', ordersController.GET)
router.post('/orders', ordersController.POST)


export default router