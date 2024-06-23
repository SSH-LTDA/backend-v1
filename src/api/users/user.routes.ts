import { Router } from 'express'
import { userController } from './index'
import {routeValidationMiddleware} from "../../middlewares/route-validation-middleware";
import {CreateUserSchema} from "./dtos/create-user.dto";

const userRoutes = Router()

userRoutes.get('/', (req, res) => userController.findAll(req, res))
userRoutes.get('/:id', (req, res) => userController.findOne(req, res))
userRoutes.post('/', routeValidationMiddleware(CreateUserSchema), (req, res) => userController.create(req , res))
userRoutes.put('/:id', (req, res) => userController.update(req, res))
userRoutes.delete('/:id', (req, res) => userController.delete(req, res))

export { userRoutes }