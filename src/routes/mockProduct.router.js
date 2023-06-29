import { Router } from "express";
import  {getMockingProducts}  from "../controllers/mockProduct.controller.js";

const router = Router();

router.get('/', getMockingProducts);

export default router;