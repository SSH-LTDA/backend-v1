export interface CreateCheckoutSessionDTO {
	room: {
		id: number;
		title: string;
		description: string;
		images: string[];
		price: number;
	};
	checkInDate: string;
	checkOutDate: string;
}
