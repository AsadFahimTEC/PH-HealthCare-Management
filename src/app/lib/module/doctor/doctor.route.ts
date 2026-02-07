import { Router } from "express";
import { DoctorController } from "./doctor.controller";


const router = Router();

router.get("/", DoctorController.getAllDoctors);
// router.get("/:id", DoctorController.deleteDoctor);
// router.put("/:id", DoctorController.deleteDoctor);
// router.delete("/:id", DoctorController.deleteDoctor);

export const DoctorRoutes = router;