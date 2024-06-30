import z from "zod";

export const CreateAccommodationSchema = z.object({
	type: z.string(),
	beds: z.number(),
	price: z.number(),
	description: z.string(),
	guestCapacity: z.number(),
	photos: z.array(z.string()),
	facilities: z.array(z.string()),
});

export type CreateAccommodationDto = z.infer<typeof CreateAccommodationSchema>;
