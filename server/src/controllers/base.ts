import { Request, Response } from "express";
import StatusCodes from "../utils/constants/StatusCodes.utils";
import { ControllerError } from "../interfaces";
import { texts } from "../utils/constants/texts";


export class BaseController {
  public StatusCodes = StatusCodes;

  public sendErrorResponse(res: Response, code: number, message?: string, data?: any): void {
    console.log(message);
    res.status(code).json({
      status: 'error',
      message: message || texts.AN_ERROR_OCCURED,
      data: data || null
    })
  };

  public sendSuccessResponse(res: Response, code: number, message?: string, data?: any): void {
    res.status(code).json({
      status: 'success',
      message: message || texts.OPERATION_SUCCESSFUL,
      data: data || null
    })
  };

  public catch(err: any, res: Response) {
    console.error(err);
    if (err instanceof ControllerError) {
      return this.sendErrorResponse(res, err.status, err.message, err.data || null);
    }
    this.sendErrorResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, texts.AN_ERROR_OCCURED, null);
  }

  public methodNotAllowed(req: Request, res: Response) {
    this.sendErrorResponse(res, this.StatusCodes.METHOD_NOT_ALLOWED, texts.METHOD_NOT_ALLOWED, null);
  }

  public errorHandler(error: any, _: any, res: Response, __: any) {
    console.log(error)
    let message, status = StatusCodes.BAD_REQUEST, data = null;
   if (error.custom) {
      message = error.message;
      status = error.status;
      data = error.data || null;
    } else if (error.statusCode == StatusCodes.BAD_REQUEST || error.status == StatusCodes.BAD_REQUEST) {
      message = texts.INVALID_REQ_BODY;
    } else {
      status = StatusCodes.INTERNAL_SERVER_ERROR;
      message = texts.AN_ERROR_OCCURED;
    };

    this.sendErrorResponse(res, status, message, data);
  }

  public wildCard(_: any, res: Response) {
    this.sendErrorResponse(res, StatusCodes.NOT_FOUND, texts.NOT_FOUND, null);
  }
}
