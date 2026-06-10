import { Router } from "express";
import { createDokter, getAllDokter, updateDokter, deleteDokter } from "../controllers/dokter.controller.js";

const router = Router()
router.post('/create', createDokter)
router.put('/update/:id', updateDokter)
router.get('/get-all', getAllDokter)
router.delete('/delete/:id', deleteDokter)

export default router