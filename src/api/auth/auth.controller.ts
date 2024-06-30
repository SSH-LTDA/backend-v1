import { Router, Request, Response } from "express";
import { AuthServiceImpl } from "./auth.service.impl";
import { RegisterDto } from "./dtos/register.dto";
import { LoginDto } from "./dtos/login.dto";
import { routeValidationMiddleware } from "../../middlewares/route-validation-middleware";
import { asyncHandler } from "../../middlewares/async-handler.middleware";

const router = Router();
const authService = new AuthServiceImpl();

router.post(
	"/register",
	asyncHandler(async (req: Request, res: Response) => {
		const registerDto: RegisterDto = req.body;
		const result = await authService.register(registerDto);
		res.status(201).json(result);
	}),
);

router.post(
	"/login",
	asyncHandler(async (req: Request, res: Response) => {
		const loginDto: LoginDto = req.body;
		const result = await authService.login(loginDto);
		res.status(200).json(result);
	}),
);

export default router;
