import { body, param, query } from "express-validator";
import { texts } from "../../utils/constants/texts";
import { ObjectId } from "bson";

export const validateGateway = () =>{
    return [
        body('serial_number',texts.SERIAL_NUMBER_REQUIRED).isString().isLength({min:3, max: 20}), 
        body('name', texts.NAME_REQUIRED).isString().isLength({min:3, max: 20}),
        body('ipaddress', texts.IPADDRESS_INVALID).isIP().isLength({min:3, max: 20}),
       
    ]
}

export const validateGetGateway = () =>{
    return [
      param('_id',texts.VALIDATION_NOT_FOUND).isMongoId(),
    ]
}

export const validateUpdateGateway = () =>{
    return [
        param('_id',texts.VALIDATION_NOT_FOUND).isMongoId(),
        body('serial_number',texts.SERIAL_NUMBER_REQUIRED).isString().isLength({min:3, max: 20}), 
        body('name', texts.NAME_REQUIRED).isString().isLength({min:3, max: 20}),
        body('ipaddress', texts.IPADDRESS_INVALID).isIP().isLength({min:3, max: 20}),
    ]
}

export const validateVerifyAddress = () =>{
    return [
        param('_id',texts.VALIDATION_NOT_FOUND).isMongoId(),
        body('ipaddress_verified', texts.ADDRESS_NOT_VERIFIED).isBoolean(),
    ]
}