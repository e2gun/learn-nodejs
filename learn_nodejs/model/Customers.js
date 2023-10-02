const mongoose = require('mongoose');
const validator = require('validator');
const tcValidator = require('../helper/validations/tcValidator');

const CustomerScheme = new mongoose.Schema({
    identityNumber : {
        type : String,
        trim : true,
        required : true,
        minlength : [11,'En az 11 karakter girilmelidir'],
        validate : [tcValidator,'Lütfen geçerli bir tc kimlik no girin']
    },
    fullName : {
        type : String,
        trim : true,
        required : true,
        minlength : [5,'En az 5 karakter girilmelidir'],
        maxlength : [50,'50 karekterden fazla olamaz.']
    },
    address : {
        type : String,
        trim : true,
        required : true,
        minlength : [10,'En az 10 karakter girilmelidir'],
        maxlength : [500,'500 karekterden fazla olamaz.']
    },
    cellPhone : {
        type : String,
        trim: true,
        required  : true,
        require   : 'Telefon numarası girilmesi zorunludur',
        validate: {
            validator: function(v) {
              return /(05|5)[0-9][0-9][1-9]([0-9]){6}/.test(v);
            },
            message: props => `${props.value} geçerli bir telefon numarası değil!`
        },
    },
    email :{
        type : String,
        trim: true,
        lowercase: true,
        required : true,
        require  : 'E-posta adresi zorunludur',
        unique : true,
        validate : [validator.isEmail,'Lütfen geçerli bir e-posta adresi girin'],
        maxlength : [50,'50 karekterden fazla olamaz.']
    },
    Note : {
        type : String,
        trim: true,
        minlength : [10,'En az 10 karakter girilmelidir'],
        maxlength : [500,'500 karekterden fazla olamaz.']
    },
    creationDate : {
        type : Date,
        default : Date.now
    }
})

module.exports = Customer = mongoose.model('customer', CustomerScheme);