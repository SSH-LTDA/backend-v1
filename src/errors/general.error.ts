import {BaseError} from "./base.error";
export class GeneralError extends BaseError {
  constructor(errorCode: string, message: string) {
    super(errorCode, message, 500);
  }
}
