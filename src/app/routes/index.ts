import { Router } from "express";
import { SpecialtyRoutes } from "../lib/module/specialty/specialty.route";

const router = Router();

router.use("/specialties", SpecialtyRoutes);

export const IndexRoutes = router;