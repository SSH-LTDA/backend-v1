import { Request, Response, Router } from "express";
import { asyncHandler } from "../../middlewares/async-handler.middleware";
import StripeServiceImpl from "./stripe.service.impl";

const router = Router();

router.post(
	"/create-checkout-session",
	asyncHandler(async (req: Request, res: Response) => {
		res
			.status(201)
			.send(await StripeServiceImpl.createCheckoutSession(req.body));
	}),
);

export default router;
