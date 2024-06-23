import { Request, Response, NextFunction } from "express";
import {BaseError} from "../errors/base.error";
import {GeneralError} from "../errors/general.error";
import {BadRequestError} from "../errors/bad-request.error";
import {NotFoundError} from "../errors/not-found.error";
import {UnauthorizedError} from "../errors/unauthorized.error";
import {ForbiddenError} from "../errors/forbidden.error";

export const ErrorHandlerMiddleware = () => {
  return (error: BaseError, request: Request, response: Response, next: NextFunction) => {
    if (!response.headersSent) {
      if (
        error instanceof GeneralError ||
        error instanceof BadRequestError ||
        error instanceof NotFoundError ||
        error instanceof UnauthorizedError ||
        error instanceof ForbiddenError
      ) {
        return response.status(error.status).json({
          error: error.error,
          message: error.message,
        });
      }
			else {
        return response.status(500).json({
          error: "application_error",
          message: error.message,
        });
      }
    } else {
      next();
    }
  };
};