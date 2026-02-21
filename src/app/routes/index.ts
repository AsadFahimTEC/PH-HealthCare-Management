import { Router } from "express";
import { SpecialtyRoutes } from "../lib/module/specialty/specialty.route";
import { AuthRoutes } from "../lib/module/auth/auth.route";
import { UserRoutes } from "../lib/module/user/user.route";
import { DoctorRoutes } from "../lib/module/doctor/doctor.route";
import { scheduleRoutes } from "../lib/module/schedule/schedule.route";
import { DoctorScheduleRoutes } from "../lib/module/doctorSchedule/doctorSchedule.route";
import { AppointmentRoutes } from "../lib/module/appointment/appointment.route";
import { PatientRoutes } from "../lib/module/patient/patient.routes";
import { PrescriptionRoutes } from "../lib/module/prescription/prescription.route";
import { ReviewRoutes } from "../lib/module/review/review.route";
import { AdminRoutes } from "../lib/module/admin/admin.route";
import { PaymentRoutes } from "../lib/module/payment/payment.route";
import { StatsRoutes } from "../lib/module/stats/stats.route";

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/specialties", SpecialtyRoutes);
router.use("/users", UserRoutes);
router.use("/patients", PatientRoutes);
router.use("/doctors", DoctorRoutes);
router.use("/admins", AdminRoutes)
router.use("/schedules", scheduleRoutes);
router.use("/doctor-schedules", DoctorScheduleRoutes);
router.use("/appointments", AppointmentRoutes);
router.use("/prescriptions", PrescriptionRoutes);
router.use("/reviews", ReviewRoutes);
router.use("/stats", StatsRoutes);
router.use("/payments", PaymentRoutes);

export const IndexRoutes = router;