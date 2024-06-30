import express from "express";
import { userRoutes } from "./api/users/user.routes";
import { accommodationRoutes } from "./api/accomodation/accommodation.routes";
import { bookingRoutes } from "./api/booking/booking.routes";
import authRoutes from "./api/auth/auth.routes";
import stripeRoutes from "./api/stripe/stripe.routes";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/accommodations", accommodationRoutes);
router.use("/bookings", bookingRoutes);
router.use(authRoutes);
router.use(stripeRoutes);

export { router };
