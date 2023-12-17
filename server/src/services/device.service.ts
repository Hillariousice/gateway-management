import { Model, } from "mongoose";
import { ControllerError,GateWayType, MasterDeviceType, PeripheralDeviceType } from "../interfaces";
import { CreateMasterDeviceDto, CreateChildDeviceDto } from "../dto/device.dto";
import StatusCodes from "../utils/constants/StatusCodes.utils";
import { texts } from "../utils/constants/texts";




export default class DeviceService {
    constructor(
        private GatewayModel: Model<GateWayType>,
        private PeripheralModel: Model<PeripheralDeviceType> ,
        private MasterModel: Model<MasterDeviceType>,
    ){}
    async createMasterDevice(_id: string, data: CreateMasterDeviceDto) {
      const gateway = await this.GatewayModel.findById(_id);
      console.log(_id);
      if (!gateway) throw new ControllerError(texts.GATEWAY_NOT_FOUND, StatusCodes.NOT_FOUND);
         
      const device = new this.MasterModel(data);
      console.log(device)
      await device.save();
  
      gateway.device.push(device);
      await gateway.save();
  
      return device;
    }
    async createChildDevice(_id:string, data: CreateChildDeviceDto) {
        const master = await this.MasterModel.findById(_id);
        console.log(_id);
        if(!master)throw  new ControllerError(texts.MASTERDEVICE_NOT_FOUND,StatusCodes.NOT_FOUND);
        
        const device = new this.PeripheralModel(data);

        await device.save();
        master.devices.push(device);
        await master.save();
        return device;
      }
      async getMasterDevices() {
        return await this.MasterModel.find();
    }
      async deleteChildDevice(_id:string){
        const child =await this.PeripheralModel.findByIdAndDelete(_id);
        return child;
      }
}