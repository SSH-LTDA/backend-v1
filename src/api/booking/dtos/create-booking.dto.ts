import z from "zod";

export const CreateBookingSchema = z.object({
	date: z.date(),
	accommodationId: z.string(),
	employeeId: z.string()
});


export type CreateBookingDto = z.infer<typeof CreateBookingSchema>;
