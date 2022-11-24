const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const crypto = require('crypto')
const { kStringMaxLength } = require('buffer')


const profileSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Please provide your first name']
    },
    lastname: {
        type: String,
        required: [true, 'Please provide your last name']
    },
    email: {
        type: String,
        required: [true, ' Please provide an email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    }, 
    photo: String,
    verified: {
        type: Boolean,
        default: false,
        required: true
    },
    active: {
        type: Boolean,
        default: true,
        select: false
    },
    dob: {
       type: String,
    

    },
    nickname: {
        type: String,
        default: ''

    },
    address: {
        type: String,
        default: ''
    },
    country: {
        type: String,
        default: ''
    },
    gender: {
        type: String,
        default: '',
    },
    maritalStatus: {
        type: String,
        default: ''
    },
    number: {
        type: Number,
    },
    otherNumber: {
        type: Number,
    },
    Stateofresidence: {
        type: String,
        default: ''
    },
    occupation: {
        type: String,
        default: ''
    },
    occupationdetails: {
        type: String,
        default: ''
    }




})

const profile = mongoose.model('User', profileSchema)

module.exports = profile