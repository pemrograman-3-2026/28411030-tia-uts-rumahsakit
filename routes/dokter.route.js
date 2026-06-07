import { Router } from "express";
import { createDokter, getAllDokter, updateDokter } from "../controllers/dokter.controller.js";

const router = Router()
router.post('/create', createDokter)
router.put('/update/:id', updateDokter)
router.get('/get-all', getAllDokter)

export default router