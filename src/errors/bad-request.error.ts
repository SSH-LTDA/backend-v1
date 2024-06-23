import {BaseError} from "./base.error";

export class BadRequestError extends BaseError {
  constructor(errorCode: string, message: string | object) {
    super(errorCode, message, 400);
  }
}
