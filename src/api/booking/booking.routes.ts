import { Router } from 'express'
import { bookingController } from './index'
import {routeValidationMiddleware} from "../../middlewares/route-validation-middleware";
import {CreateBookingSchema} from "./dtos/create-booking.dto";

const bookingRoutes = Router()

bookingRoutes.get('/', (req, res) => bookingController.findAll(req, res))
bookingRoutes.get('/:id', (req, res) => bookingController.findOne(req, res))
bookingRoutes.post('/', routeValidationMiddleware(CreateBookingSchema), (req, res) => bookingController.create(req , res))
bookingRoutes.put('/:id', (req, res) => bookingController.update(req, res))
bookingRoutes.delete('/:id', (req, res) => bookingController.delete(req, res))

export { bookingRoutes }