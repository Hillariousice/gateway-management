import { Application } from "express";
import v1 from "./v1";
import { BaseController } from "../controllers/base";

export default (app: Application) => {
  const controller = new BaseController();

  app.use("/api/v1", v1);

  app.use(controller.errorHandler.bind(controller));

  app.use('*', controller.wildCard.bind(controller));
};