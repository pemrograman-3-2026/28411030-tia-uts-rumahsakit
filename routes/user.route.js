import express from "express";
import { login, register, update, read, hapus } from "../controllers/user.controller.js";

const router = express.Router()
router.post('/register', register)
router.post('/login', login)
router.put('/:id', update)
router.get('/', read)
router.delete('/:id', hapus)

export default router