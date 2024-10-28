import { Router } from "express";
import speciesController from "../controllers/speciesController.js"

const router = Router();

router.post("/", speciesController.store)
router.get("/", speciesController.index)
router.get("/:id", speciesController.show)
router.put("/:id", speciesController.update)
router.delete("/:id", speciesController.destroy)

export default router;