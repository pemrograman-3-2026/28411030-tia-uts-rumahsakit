import { Router } from "express";
import { create, deleteSpesialis, getAllSpesialis, getAllSpesialisById, updateSpesialis } from "../controllers/spesialis.controller.js"

const router = Router()
router.post('/create', create)
router.get('/get-all', getAllSpesialis)
router.get('/get/:id', getAllSpesialisById)
router.put('/update/:id', updateSpesialis)
router.delete('/delete/:id', deleteSpesialis)


export default router