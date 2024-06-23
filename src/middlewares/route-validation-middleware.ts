import { Request, Response, NextFunction } from 'express';
import { z, ZodError } from 'zod';

import {BadRequestError} from "../errors/bad-request.error";
import {GeneralError} from "../errors/general.error";

export function routeValidationMiddleware(schema: z.ZodObject<any, any>) {
	return (req: Request, res: Response, next: NextFunction) => {
		try {
			schema.parse(req.body);
			next();
		} catch (error) {
			if (error instanceof ZodError) {
				const errorMessages = error.errors.map((issue: any) => ({
					message: `${issue.path.join('.')} is ${issue.message}`,
				}))
				throw new BadRequestError("invalid_data", errorMessages)
			} else {
				throw new GeneralError("internal_error", "Internal Server Error")
			}
		}
	};
}