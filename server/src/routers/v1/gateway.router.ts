import { Router, RouterOptions } from "express";
import GatewayService from "../../services/gateway.service";
import GatewayController from "../../controllers/gateway.controllers";
import Gateway from "../../models/Gateway";
import { validate } from "../../middleware/validator/validate";
import { validateGateway, validateGetGateway, validateUpdateGateway, validateVerifyAddress } from "../../middleware/validator/gatewayValidator";


const routerOptions: RouterOptions = {
    mergeParams: true,
    strict: false,
    caseSensitive: true,
  }
const service = new GatewayService(Gateway);
const controller = new GatewayController(service);
export const gateAuthRouter: Router = Router(routerOptions);

gateAuthRouter.route('/create')
.post(validate(validateGateway()),controller.createGateway.bind(controller))
.all(controller.methodNotAllowed.bind(controller));

gateAuthRouter.route('/:_id')
.get(validate(validateGetGateway()), controller.getGateway.bind(controller))
.put(validate(validateUpdateGateway()),controller.updateGateways.bind(controller))
.patch(validate(validateVerifyAddress()),controller.verifyAddress.bind(controller))
.delete(controller.deleteGateway.bind(controller))
.all(controller.methodNotAllowed.bind(controller));

gateAuthRouter.route('/')
.get(controller.getGateways.bind(controller))
.all(controller.methodNotAllowed.bind(controller));
