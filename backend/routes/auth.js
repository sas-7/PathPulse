import express from 'express';
import { login, register, requestPasswordReset, resetPassword } from '../Controllers/authController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/reset-password', requestPasswordReset);
router.post('/reset-password/:token', resetPassword);

export default router;
