import Stripe from "stripe";

export default new Stripe(process.env.STRIPE_SECRET_KEY as string, {
	apiVersion: "2024-06-20",
});
