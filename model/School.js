const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema ({
    schoolname: {
        type: String,
        required: [true, 'Please provide name of school'],
        maxlength: [1000, 'Name can not be more than 1000 characters']
    },
    schooldescription: {
        type: String,
        default: ''
    },
    country: {
        type: String,
        required: [true, 'Please provide country'] ,
    },
    state: {
        type: String,
        required: [true, 'Please provide information']
    },
    city: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: ''
    },
    classes: {
        type: Number,
        default: ''
    },
    members: {
        type: Number
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
})

const School = mongoose.model('School', schoolSchema)

module.exports = School