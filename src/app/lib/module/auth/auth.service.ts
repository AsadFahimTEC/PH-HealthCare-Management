// import { Role, User } from "../../../../generated/prisma/client";
import { auth } from "../../auth";
// import { prisma } from "../../prisma";

interface IRegisterPatientPayload {
    name: string;
    email: string;
    password: string;
}
const registerPatient = async (payload: IRegisterPatientPayload) => {
    const { name, email, password } = payload;

    const data = await auth.api.signUpEmail({
        body: {
            name,
            email,
            password,
            // default values
            // role: Role.PATIENT,
            // needPasswordChange: false
        }
    })

    if (!data.user) {
        throw new Error("Failed to register patient");
    }

    //TODO: Create patient profile in Transaction After Sign Up of Patient in User Model
    // const patient = await prisma.$transaction(async(tx) =>{
    //     await tx.pa
    // })
    return data
}

export const AuthService = {
    registerPatient,
}