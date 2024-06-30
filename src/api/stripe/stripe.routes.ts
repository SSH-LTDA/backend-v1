import { Router } from "express";
import StripeController from "./stripe.controller";

const router = Router();

router.use("/stripe", StripeController);

export default router;
