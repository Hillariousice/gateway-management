import { NextFunction, Request, Response } from "express";
import { ValidationChain, validationResult } from "express-validator";
import StatusCodes from "../../utils/constants/StatusCodes.utils";

export const validate = (validationChain: ValidationChain[]) => async (req: Request, res: Response, next: NextFunction) => {

  function runValidator(i = 0, err: any = undefined, middlewareError: any = undefined) {
    if (middlewareError) return next(middlewareError);
    if (err) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        status: StatusCodes.BAD_REQUEST,
        message: err,
        data: null,
      })
    }
    if (i === validationChain.length) return next();

    validationChain[i](req, res, (error: any) => {
      const validateResult = validationResult(req)
      if (validateResult.array()[0]) console.log(validateResult.array()[0])
      if (!validateResult.isEmpty()) err = validateResult.array()[0].msg;
      runValidator(i + 1, err, error);
    });
  }

  runValidator();
}