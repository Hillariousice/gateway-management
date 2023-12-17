import { NextFunction, Request, Response } from "express";
import { BaseController } from "./base";
import IndexService from "../services/index.service";
import { texts } from "../utils/constants/texts";

export default class IndexController extends BaseController {
  constructor(private IndexService: IndexService) {
    super();
  }

  ping(req: Request, res: Response, next: NextFunction) {
    this.sendSuccessResponse(
      res,
      this.StatusCodes.OK,
      this.IndexService.getPong(),
      { docs: req.protocol + '://' + req.get('host') + '/api/v1/docs'
    });
  }

  getDocs(req: Request, res: Response): void {
    var url = this.IndexService.getDocs();
    if (url) {
      res.redirect(url);
    } else {
      res.status(this.StatusCodes.NOT_FOUND).send(texts.NOT_FOUND);
    }
  }
}
