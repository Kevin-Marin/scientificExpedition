import { Router } from "express";
import expeditionController from "../controllers/expeditionController.js"

const router = Router();

router.post("/", expeditionController.store)

export default router;