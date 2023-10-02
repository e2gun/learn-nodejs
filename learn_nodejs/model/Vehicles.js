const mongoose = require('mongoose');

const VehicleScheme = new mongoose.Schema({
    plate : {
        type : String,
        require : true,
        maxlength : [10,'10 karekterden fazla olamaz.']
    },
    chassisNumber :{
        type : String,
        require : true,
        unique : true,
        validate :
        [
            {
                validator: function(v) {
                  return v && v.length === 17;
                },
                message: props => `${props.value} 17 karakter olmalıdır!`
            }
        ]
    },
    vehicleDescription : {
        type : String,
        require : true
    },
    creationDate : {
        type : Date,
        default : Date.now
    }
})

module.exports = Vehicle = mongoose.model('vehicle', VehicleScheme);