import z from "zod";

export const CreateBookingSchema = z.object({
	checkInDate: z.string(),
	checkOutDate: z.string(),
	accommodationId: z.string(),
	clientId: z.string(),
});

export type CreateBookingDto = z.infer<typeof CreateBookingSchema>;
