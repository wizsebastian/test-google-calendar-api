import express from "express"
import { formForgotPassword, formLogin, formRegister, register } from "../controllers/user.controller.js";

const router = express.Router()

// views (template enginee)
router.get('/login', formLogin)
router.get('/register', formRegister)
router.get('/olvide-password', formForgotPassword)

// manage actions

router.post('/register', register)

export default router 