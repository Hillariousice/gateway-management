import {Request,Response, NextFunction } from "express";
import GatewayService from "../services/gateway.service";
import { BaseController } from "./base"
import { texts } from "..//utils/constants/texts";
import { UpdateGatewayDto } from "../dto/gateway.dto";

export default class GatewayController extends BaseController {
    constructor(private GatewayService: GatewayService){
        super()
    }

    async createGateway(req: Request, res: Response, next: NextFunction) {
    try{
        const gateway = await this .GatewayService.createGateway(req.body); 
        this.sendSuccessResponse(res, this.StatusCodes.CREATED,texts.GATEWAY_CREATED, gateway);
    }catch(err){
        this.catch(err, res)
        console.log(err)
    }
    }

    async  getGateway(req: Request, res: Response, next: NextFunction){
        try{
            const gate = await this.GatewayService.getGateway(req.params._id);
            this.sendSuccessResponse(res, this.StatusCodes.OK,texts.OPERATION_SUCCESSFUL, gate); 
        }catch(err){
            this.catch(err, res)  
        }
    }

    async getGateways(req: Request, res: Response, next: NextFunction){
        try{
            const gate = await this.GatewayService.getGateways();
            this.sendSuccessResponse(res, this.StatusCodes.OK,texts.OPERATION_SUCCESSFUL, gate); 
        }catch(err){
            this.catch(err, res)  
        }
    }

    async updateGateways(req: Request, res: Response, next: NextFunction){
        try{
            await this.GatewayService.updateGateway(req.params._id, req.body)
            this.sendSuccessResponse(res, this.StatusCodes.OK, texts.GATEWAY_UPDATED, null)
        }catch(err){
            this.catch(err, res) 
        }
    }
    async verifyAddress(req: Request, res: Response, next: NextFunction){
        try{
            const updatedGateway = await this.GatewayService.verifyIpAddress(req.params._id,req.body);
            this.sendSuccessResponse(res, this.StatusCodes.OK, texts.ADDRESS_VERIFIED, updatedGateway)
        }catch(err){
            this.catch(err, res) 
        }
    }
    async deleteGateway(req: Request, res: Response, next: NextFunction){
        try{
            await this.GatewayService.deleteGateway(req.params._id);
            this.sendSuccessResponse(res, this.StatusCodes.OK, texts.GATEWAY_DELETED, null)
        }catch(err){
            this.catch(err,res)
        }
    } 
};