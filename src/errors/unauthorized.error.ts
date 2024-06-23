import {BaseError} from "./base.error";

export class UnauthorizedError extends BaseError {
  constructor(errorCode: string, message: string | object) {
    super(errorCode, message, 401);
  }
}
