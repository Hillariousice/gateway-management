import mongoose, { Schema } from "mongoose";
import { MasterDeviceType, } from "../interfaces";

const masterDeviceSchema = new Schema<MasterDeviceType>(
  {      
    uid: { type: Number },
    vendor: { type: String },
    date_created: { type: Date },
    status: { type: String, enum: ["online", "offline"] },
    devices:[{ type: Schema.Types.ObjectId, ref:'MASTERDEVICE' }],
    gateway_id: { type: Schema.Types.ObjectId, ref:'GATEWAY' },
  },
  { timestamps: true }
);

export default mongoose.model<MasterDeviceType>('DEVICE', masterDeviceSchema);