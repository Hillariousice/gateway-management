import { GateWayType, MasterDeviceType } from "../interfaces";


export class GatewayDto {
  serial_number!:string;
  name!:string;
  ipaddress!:string;
  ipaddress_verified!:boolean;
}

export class CreateGatewayDto {
    serial_number!:string;
    name!:string;
    ipaddress!:string;
    ipaddress_verified!:boolean;
    device?:MasterDeviceType[];
  constructor(data:GatewayDto,) {
    this.serial_number = data.serial_number;
    this.name = data.name;
    this.ipaddress = data.ipaddress;
    this.ipaddress_verified = data.ipaddress_verified;
  }  
   }
   
export class UpdateGatewayDto {
    serial_number?:string;
    name?:string;
    ipaddress?:string;
}
export class VerifyAdressDto {
   ipaddress_verified?:boolean;
}