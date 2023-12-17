import { body, param, query } from "express-validator";
import { texts } from "../../utils/constants/texts";
import { ObjectId } from "bson";


export const validateMasterDevice = () =>{  
    return [
        param('_id',texts.GATEWAY_NOT_FOUND).isMongoId(),
        body('uid',texts.UID_REQUIRED).isString().isLength({min:3, max: 20}), 
        body('vendor', texts.VENDOR_REQUIRED).isString().isLength({min:3, max: 20}),
        body('status', texts.INVALID_STATUS).optional().isIn(['online', 'offline']),
        body('date-created', texts.INVALID_DATE).optional().isDate()

    ]
}
export const validatePDevice = () =>{
    return [
       param('_id',texts.MASTERDEVICE_NOT_FOUND).isMongoId(),
        body('uid',texts.UID_REQUIRED).isString().isLength({min:3, max: 20}), 
        body('vendor', texts.VENDOR_REQUIRED).isString().isLength({min:3, max: 20}),
        body('status', texts.INVALID_STATUS).optional().isIn(['online', 'offline']),
        body('date-created', texts.INVALID_DATE).optional().isDate()
        
    ]
}