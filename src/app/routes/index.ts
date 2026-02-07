import { Router } from "express";
import { SpecialtyRoutes } from "../lib/module/specialty/specialty.route";
import { AuthRoutes } from "../lib/module/auth/auth.route";
import { UserRoutes } from "../lib/module/user/user.route";
import { DoctorRoutes } from "../lib/module/doctor/doctor.route";

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/specialties", SpecialtyRoutes);
router.use("/users", UserRoutes);
router.use("/doctors", DoctorRoutes);

export const IndexRoutes = router;