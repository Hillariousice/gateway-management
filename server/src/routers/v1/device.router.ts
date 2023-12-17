import { Router, RouterOptions } from "express";
import DeviceController from "../../controllers/device.controller";
import Gateway from "../../models/Gateway";
import DeviceService from "../../services/device.service";
import Device from "../../models/Device";
import MasterDevice from "../../models/MasterDevice";
import { validateMasterDevice, validatePDevice } from "../../middleware/validator/deviceValidator";
import { validate } from "../../middleware/validator/validate";


const routerOptions: RouterOptions = {
    mergeParams: true,
    strict: false,
    caseSensitive: true,
  }
const service = new DeviceService(Gateway, Device, MasterDevice);
const controller = new DeviceController(service);
export const deviceAuthRouter: Router = Router(routerOptions);

deviceAuthRouter.route('/create/:_id')
.post(validate(validateMasterDevice()),controller.createMasterDevice.bind(controller))
.all(controller.methodNotAllowed.bind(controller));

deviceAuthRouter.route('/createpd/:_id')
.post(validate(validatePDevice()), controller.createChildDevice.bind(controller))
.all(controller.methodNotAllowed.bind(controller));

deviceAuthRouter.route('/:_id')
.delete(controller.deleteChildDevice.bind(controller))
.all(controller.methodNotAllowed.bind(controller));

deviceAuthRouter.route('/')
.get(controller.getMaster.bind(controller))
.all(controller.methodNotAllowed.bind(controller));


