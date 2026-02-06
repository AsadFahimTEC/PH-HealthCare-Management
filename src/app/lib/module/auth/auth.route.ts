import { Router } from "express";
import { AuthController } from "./auth.controller";

const router = Router();

router.post("/login", AuthController.loginPatient);
router.post("/register", AuthController.registerPatient);

export const AuthRoutes = router;