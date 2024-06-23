import z from "zod";

export const CreateAccommodationSchema = z.object({
	type: z.string(),
	size: z.number(),
	guestCapacity: z.number(),
	photos: z.array(z.string()),
});


export type CreateAccommodationDto = z.infer<typeof CreateAccommodationSchema>;
