export class BaseError extends Error {
  public error: string;
  public status: number;

  constructor(errorCode: string, message: any, httpStatus: number) {
    super(message);

    this.error = errorCode;
    this.message = message;
    this.status = httpStatus;

    Error.captureStackTrace(this, this.constructor);
  }
}
