/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from "express";
import { SpecialtyController } from "../specialty.controller";
import { checkAuth } from "../../../middleware/checkAuth";
import { Role } from "../../../../generated/prisma/enums";
import { validateRequest } from "../../../middleware/validateRequest";
import { SpecialtyValidation } from "./specialty.validation";
import { multerUpload } from "../../../../config/multer.config";

const router = Router();

router.post('/', multerUpload.single("file"), validateRequest(SpecialtyValidation.createSpecialtyZodSchema),  SpecialtyController.createSpecialty);
// router.post('/', checkAuth(Role.ADMIN, Role.SUPER_ADMIN), validateRequest(SpecialtyValidation.createSpecialtyZodSchema),  SpecialtyController.createSpecialty);
router.get('/', SpecialtyController.getAllSpecialties);
router.delete('/:id', checkAuth(Role.ADMIN, Role.SUPER_ADMIN), SpecialtyController.deleteSpecialty);

export const SpecialtyRoutes = router;