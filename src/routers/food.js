import { Router } from "express";
import foodsController from '../controller/foods.js'

const router = Router();

router.get("/foods", foodsController.GET);


export default router