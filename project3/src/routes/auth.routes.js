import { Router } from "express";
import { authController } from "../controllers/auth.controller.js";

const router = Router();

router.post('/register', authController.user_register);
router.post('/login', authController.user_login);
router.get('/verify/:token', authController.user_verify);
router.get('/logout', authController.user_logout);

export { router as authRouter };