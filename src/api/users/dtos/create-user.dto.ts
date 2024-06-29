import z from "zod";
import {UserRole} from "@prisma/client";

export const CreateUserSchema = z.object({
	name: z.string(),
	cpf: z.string(),
	email: z.string().email(),
	phone: z.string(),
	role: z.nativeEnum(UserRole).optional(),
	password: z.string().min(6),
});


export type CreateUserDTO = z.infer<typeof CreateUserSchema>;
