// The User model

var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var userSchema = new Schema({
    username:  {type: String, required: true},
    password:  {type: String, required: true},
    firstname:  {type: String, required: true},
    lastname:  {type: String, required: true},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now},
    is_active: {type: Boolean, default: false},
    is_deleted: {type: Boolean, default: false}

}, { versionKey: false });

module.exports = mongoose.model('User', userSchema);