import z from "zod";
import { UserRole } from "@prisma/client";

export const RegisterSchema = z.object({
	name: z.string(),
	cpf: z.string(),
	email: z.string().email(),
	phone: z.string(),
	role: z.nativeEnum(UserRole).optional(),
	password: z.string(),
});

export type RegisterDto = z.infer<typeof RegisterSchema>;
