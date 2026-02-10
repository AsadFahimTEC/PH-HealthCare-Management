import { Router } from "express";
import { UserController } from "./user.controller";
import { validateRequest } from "../../../middleware/validateRequest";
import { createDoctorZodSchema } from "./user.validation";
import { checkAuth } from "../../../middleware/checkAuth";
import { Role } from "../../../../generated/prisma/enums";



const router = Router();

router.post("/create-doctor",

    //     (req: Request, res: Response, next: NextFunction) => {
    //     // console.log(req.body, "Before Zod Validation");

    //     const parsedResult = createDoctorZodSchema.safeParse(req.body);

    //     if (!parsedResult.success) {

    //         // console.log("Zod Error", parsedResult.error);

    //         next(parsedResult.error)
    //     }

    //     // Sanitizing the data
    //     req.body = parsedResult.data;

    //     // console.log(req.body, "After Zod Validation");

    //     next();

    // },

    validateRequest(createDoctorZodSchema), UserController.createDoctor);
router.post("/create-admin",
    checkAuth(Role.SUPER_ADMIN, Role.ADMIN),
    UserController.createAdmin);
export const UserRoutes = router;