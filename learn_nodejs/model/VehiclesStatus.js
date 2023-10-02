import { Schema, model, models } from "mongoose";

const VehicleStatusScheme = new Schema({
    vehicle : {
        type : Schema.Types.ObjectId,
        ref : 'vehicle',
        required: true
    },
    customer : {
        type : Schema.Types.ObjectId,
        ref : 'customer'
    },
    startDate : {
        type : Date,
        require : true
    },
    endDate : {
        type : Date
    },
    active : {
        type : Boolean,
        require : true
    },
    Status : {
        type : String,
        enum : ['AVAILABLE','RENT','SOLD','ONSALE','GALLERY','DAMAGE'],
        default : 'AVAILABLE'
    },
    rentaCarInfo : [{
        rentaCarNumber : {
            type : String,
            require : true,
            unique  : true,
            index   : true
        },
        rentACarDescription : {
            type : String,
            require : true
        }        
    }]
})

VehicleStatusScheme.plugin('rentaCarNumber', generateUniqueKey(() => String(Math.floor(Math.random() * 9000000) + 1000000)));

export default VehicleStatus = model('vehiclestatus', VehicleStatusScheme);