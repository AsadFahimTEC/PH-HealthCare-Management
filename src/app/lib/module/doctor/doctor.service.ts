import { Doctor } from "../../../../generated/prisma/client";
import { prisma } from "../../prisma"

const getAllDoctors = async () => {
    const doctors = await prisma.doctor.findMany({
        include: {
            user: true,
            specialties: {
                include: {
                    specialty: true
                }
            }
        }
    })

    return doctors;
}

// const getDoctorById = async () => {
//     const doctors = await prisma.doctor.findUnique({
//         include: {
//             user: true, 
//             userId: true,
//         }
//     })
//     return doctors
// }

// const UpdateDoctor = async () => {
//     const doctors = await prisma.doctor.findUnique({
//         include: {
//             user: true, 
//             userId: true,
//         }
//     })
//     return doctors
// }

const deleteDoctor = async (id: string): Promise<Doctor> => {
    const doctor = await prisma.doctor.delete({
        where: { id }
    })
    return doctor;
}

export const DoctorService = {
    getAllDoctors,
    // getDoctorById,
    // updateDoctor,
    deleteDoctor
}