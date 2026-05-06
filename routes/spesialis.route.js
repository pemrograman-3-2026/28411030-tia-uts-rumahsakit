import { Router } from "express";
import { create, update, read, hapus } from "../controllers/spesialis.controller.js"

const router = Router()
router.post('/create', create)
router.put('/:id', update)
router.get('/', read)
router.delete('/:id', hapus)

export default router