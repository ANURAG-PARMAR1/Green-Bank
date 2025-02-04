import { Router } from 'express';
import { verifyJWT } from '../middlewares/auth.middleware.js';
import {
  loginUser,
  registerUser,
  getUserDetails,
  sendOTP,
  changePassword,
  sendMoney
} from '../controllers/user.controller.js';
import { resetPasswordToken, resetPassword } from "../controllers/ResetPassword.js";
const router = Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/sendotp').post(sendOTP);
router.route('/changepassword').post(verifyJWT).post(changePassword);
router.route('/details').get(verifyJWT, getUserDetails);
router.route('/sendmoney').post(verifyJWT,sendMoney);

router.route('/reset-password-token').post(resetPasswordToken)                 // Route for generating a reset password token
router.route('/reset-password').post(resetPassword)

export default router;
