import {BaseError} from "./base.error";

export class NotFoundError extends BaseError {
  constructor(errorCode: string, message: string | object) {
    super(errorCode, message, 404);
  }
}
