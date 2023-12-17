import { Document,Model,PopulatedDoc, Types } from "mongoose";


export interface MasterDeviceType{
    uid: number;
    vendor: string;
    date_created: Date;
    status:'online'| 'offline';
    devices:PeripheralDeviceType[]
    gateway_id: PopulatedDoc<Document<Types.ObjectId> & GateWayType>
}
export interface MasterDeviceMethodsType extends Model<MasterDeviceType> { }

export type MasterDeviceDocType = Document<unknown, {}, MasterDeviceType> & Omit<MasterDeviceType & {
  _id: Types.ObjectId;
  createdAt: string;
  updatedAt: string;
}, keyof MasterDeviceMethodsType> & MasterDeviceMethodsType;

export interface PeripheralDeviceType{
    uid: number;
    vendor: string;
    date_created: Date;
    status:'online'| 'offline';
    master_id: PopulatedDoc<Document<Types.ObjectId> & MasterDeviceType>
}
export interface PeripheralDeviceMethodsType extends Model<PeripheralDeviceType> { }

export type PeripheralDeviceDocType = Document<unknown, {}, PeripheralDeviceType> & Omit<PeripheralDeviceType & {
  _id: Types.ObjectId;
  createdAt: string;
  updatedAt: string;
}, keyof PeripheralDeviceMethodsType> & PeripheralDeviceMethodsType;


export  interface GateWayType {
   serial_number:string;
   name:string;
   ipaddress:string;
   ipaddress_verified:boolean;
   device:MasterDeviceType[]
  }
export interface GatewayMethodsType extends Model<GateWayType> { }

export type GatewayDocType = Document<unknown, {}, GateWayType> & Omit<GateWayType & {
  _id: Types.ObjectId;
  createdAt: string;
  updatedAt: string;
}, keyof GatewayMethodsType> & GatewayMethodsType;

export class ControllerError extends Error {
    constructor(msg: string, public status: number, public data?: any) {
      super(msg);
    }
  }