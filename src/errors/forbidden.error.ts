import {BaseError} from "./base.error";

export class ForbiddenError extends BaseError {
  constructor(errorCode: string, message: string) {
    super(errorCode, message, 403);
  }
}
