import { CreateCheckoutSessionDTO } from "./dto/create-checkout-session.dto";

export interface StripeService {
	createCheckoutSession(data: CreateCheckoutSessionDTO): Promise<any>;
}
