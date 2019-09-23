const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [
            true,
            "Please enter a name for your pet!"
        ],
        minlength: [
            3,
            "Please enter a name of at least 3 characters."
        ]
    },
    type: {
        type: String,
        required: [
            true,
            "Please enter the type of your pet!"
        ],
        minlength: [
            3,
            "Please enter a type with more than 2 characters!"
        ]
    },
    desc: {
        type: String,
        required: [
            true,
            "Please enter a pet description!"
        ],
        minlength: [
            3,
            "Description must be at least 3 characters"
        ]
    },
    skill1: {
        type: String,
        required: false
    },
    skill2: {
        type: String,
        required: false
    },
    skill3: {
        type: String,
        required: false
    },
    likes: {
        type: Number,
        default: 0
    }
}, {timestamps: true});

mongoose.model('Pet', PetSchema);
PetSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique. Please enter a unique name for your pet' }, {type: 'mongoose-unique-validator'});
