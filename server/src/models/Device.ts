import mongoose, { Schema } from "mongoose";
import { PeripheralDeviceType } from "../interfaces";

const deviceSchema = new Schema<PeripheralDeviceType>(
  {      
    uid: { type: Number },
    vendor: { type: String },
    date_created: { type: Date },
    status: { type: String, enum: ["online", "offline"], required: true },
    master_id: { type: Schema.Types.ObjectId, ref:'MASTERDEVICE' },
  },
  { timestamps: true }
);

export default mongoose.model<PeripheralDeviceType>('MASTERDEVICE', deviceSchema);