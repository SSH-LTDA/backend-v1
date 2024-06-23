import { Router } from 'express'
import { accommodationController } from './index'
import {routeValidationMiddleware} from "../../middlewares/route-validation-middleware";
import {CreateAccommodationSchema} from "./dtos/create-accommodation.dto";

const accommodationRoutes = Router()

accommodationRoutes.get('/', (req, res) => accommodationController.findAll(req, res))
accommodationRoutes.get('/:id', (req, res) => accommodationController.findOne(req, res))
accommodationRoutes.post('/', routeValidationMiddleware(CreateAccommodationSchema), (req, res) => accommodationController.create(req , res))
accommodationRoutes.put('/:id', (req, res) => accommodationController.update(req, res))
accommodationRoutes.delete('/:id', (req, res) => accommodationController.delete(req, res))

export { accommodationRoutes }