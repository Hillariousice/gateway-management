import { Model } from "mongoose";
import { CreateGatewayDto, UpdateGatewayDto, VerifyAdressDto } from "../dto/gateway.dto";
import {ControllerError, GateWayType, } from "../interfaces";
import StatusCodes from "../utils/constants/StatusCodes.utils";
import { texts } from "../utils/constants/texts";


export default class GatewayService{
    constructor( private GatewayModel: Model<GateWayType>) {}
   
    
    async createGateway(data: CreateGatewayDto) {
        const errors =[];
                // Validate maximum number of peripheral devices
        if (data.device && data.device.length > 10) {
            errors.push(texts.TOO_MANY_DEVICES);
        }
        console.log(data)
        const gateway = new this.GatewayModel(new CreateGatewayDto(data));
        return await gateway.save();
    }

    async getGateway(_id: string) {
        return await this.GatewayModel.findById(_id);

    }

    async getGateways() {
        return await this.GatewayModel.find();
    }

    async updateGateway(_id: string, data: UpdateGatewayDto) {
        const gateway =  this.GatewayModel.findById(_id)
        if(!gateway) throw new ControllerError(texts.GATEWAY_NOT_FOUND,StatusCodes.NOT_FOUND);
        return await gateway.findOneAndUpdate({_id}, data, {new: true});
    }

    async verifyIpAddress(gatewayId: string, data:VerifyAdressDto) {
        
          const gateway = await this.GatewayModel.findById(gatewayId);
         
          if(!gateway) throw new ControllerError(texts.GATEWAY_NOT_FOUND,StatusCodes.NOT_FOUND);
         
         await this.GatewayModel.findByIdAndUpdate(gatewayId, data, {new: true},)
          await gateway.save();
    
          return gateway;
       
      }

      async deleteGateway(gateId: string){
        const gateway = await this.GatewayModel.findByIdAndDelete(gateId);
        
        return gateway; 
      }
}