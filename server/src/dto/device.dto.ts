import { ObjectId } from "mongoose";
import { GateWayType, PeripheralDeviceType, MasterDeviceType, MasterDeviceDocType, PeripheralDeviceDocType } from "../interfaces";
import { Document,PopulatedDoc, Types } from "mongoose";


export  class Device{
    uid!: number;
    vendor!: string;
    date_created!: Date;
    status!:'online'| 'offline';
    
}
export class CreateMasterDeviceDto {
    uid: number;
    vendor: string;
    date_created: Date;
    status:'online'| 'offline';
    device?:PeripheralDeviceType[];

  constructor(public _id: string, data: Device) {
    this.uid= data.uid;
    this.vendor = data.vendor;
    this.date_created = data.date_created;
    this.status = data.status;
   
  }  
   }

  export class CreateChildDeviceDto {
    uid: number;
    vendor: string;
    date_created: Date;
    status:'online'| 'offline';
   
    constructor( public _id: string, data:Device,) {
        this.uid= data.uid;
        this.vendor = data.vendor;
        this.date_created = data.date_created;
        this.status = data.status;
      
    }

  }