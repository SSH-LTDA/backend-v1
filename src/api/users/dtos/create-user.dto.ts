import z from "zod";
import {UserRole} from "@prisma/client";

export const CreateUserSchema = z.object({
	name: z.string(),
	cpf: z.string().regex(/[0-9]{11}/),
	email: z.string().email(),
	phone: z.string(),
	role: z.nativeEnum(UserRole),
	password: z.string(),
});


export type CreateUserDTO = z.infer<typeof CreateUserSchema>;
