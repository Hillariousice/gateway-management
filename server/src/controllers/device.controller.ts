import {Request,Response, NextFunction } from "express";
import DeviceService from "../services/device.service";
import { BaseController } from "./base"
import { texts } from "..//utils/constants/texts";


export default class DeviceController extends BaseController {
    constructor(private DeviceService: DeviceService){
        super()
    }

    async createMasterDevice(req: Request, res: Response, next: NextFunction) {
    try{
        const _id = req.params._id;
        const Device = await this .DeviceService.createMasterDevice(_id ,req.body)
        this.sendSuccessResponse(res, this.StatusCodes.CREATED,texts.DEVICE_CREATED, Device);
    }catch(err){
        this.catch(err, res)
    }
    }

    async  createChildDevice(req: Request, res: Response, next: NextFunction){
        try{
            const _id = req.params._id;
            const gate = await this.DeviceService.createChildDevice(_id,req.body);
            this.sendSuccessResponse(res, this.StatusCodes.OK,texts.OPERATION_SUCCESSFUL, gate); 
        }catch(err){
            this.catch(err, res)  
        }
    }

    async getMaster(req: Request, res: Response, next: NextFunction){
        try{
            const gate = await this.DeviceService.getMasterDevices();
            this.sendSuccessResponse(res, this.StatusCodes.OK,texts.OPERATION_SUCCESSFUL, gate); 
        }catch(err){
            this.catch(err, res)  
        }
    }

    async deleteChildDevice(req: Request, res: Response, next: NextFunction){
        try{
            await this.DeviceService.deleteChildDevice(req.params._id);
            this.sendSuccessResponse(res, this.StatusCodes.OK, texts.DEVICE_DELETED, null)
        }catch(err){
            this.catch(err,res)
        }
    } 
};