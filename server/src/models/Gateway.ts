import mongoose,{ Schema } from "mongoose";
import { GateWayType } from "../interfaces";

const gatewaySchema = new Schema<GateWayType>(
  {
    serial_number: { type: String },
    name: { type: String },
    ipaddress: { type: String },
    ipaddress_verified: { type: Boolean },
    device: [{ type: Schema.Types.ObjectId, ref:'MASTERDEVICE' }],
  },
  { timestamps: true }
);

export default mongoose.model<GateWayType>('GATEWAY', gatewaySchema);