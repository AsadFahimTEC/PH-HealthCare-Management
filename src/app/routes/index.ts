import { Router } from "express";
import { SpecialtyRoutes } from "../lib/module/specialty/specialty.route";
import { AuthRoutes } from "../lib/module/auth/auth.route";
import { UserRoutes } from "../lib/module/user/user.route";

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/specialties", SpecialtyRoutes);
router.use("/doctors", UserRoutes);

export const IndexRoutes = router;