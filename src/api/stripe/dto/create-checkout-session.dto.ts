export interface CreateCheckoutSessionDTO {
	room: {
		id: number;
		type: string;
		description: string;
		photos: string[];
		price: number;
	};
	checkInDate: string;
	checkOutDate: string;
}
