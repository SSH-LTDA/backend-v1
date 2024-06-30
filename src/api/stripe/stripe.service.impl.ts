import { StripeService } from "./stripe.service";
import { CreateCheckoutSessionDTO } from "./dto/create-checkout-session.dto";
import StripeApi from "../../core/stripe.api";
import moment from "moment";

class StripeServiceImpl implements StripeService {
	async createCheckoutSession(data: CreateCheckoutSessionDTO) {
		const { room, checkInDate, checkOutDate } = data;

		return await StripeApi.checkout.sessions.create({
			payment_method_types: ["card"],
			line_items: [
				{
					price_data: {
						currency: "brl",
						product_data: {
							name: room.title,
							description: `Check-in: ${moment(checkInDate).format("DD-MM-YYYY")}  |  Check-out: ${moment(checkOutDate).format("DD-MM-YYYY")}`,
							images: [room.images[0]],
						},
						unit_amount: room.price * 100,
					},
					quantity: moment(checkOutDate).diff(checkInDate, "days"),
				},
			],
			mode: "payment",
			locale: "pt-BR",
			success_url: `http://localhost:5173/rooms?roomId=${room.id}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`,
			cancel_url: "http://localhost:5173/rooms",
		});
	}
}

export default new StripeServiceImpl();
