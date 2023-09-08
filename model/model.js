const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'username field is required']
    },
    email: {
        type: String,
        required: [true, 'Email field is required']
    },
    password:{
        type: String,
        required: [true, 'password field is required']
    },
    date : {
        type: Date,
        default : Date.now
    }
});

const AdminLoginSchema = new Schema({
    username : {
        type:String,
        required: [true, 'username field is required']
    },
    password:{
        type: String,
        required: [true, 'password field is required']
    }
    },
    {
        collection:'admin'
    });


const User = mongoose.model('users',UserSchema);
const AdminLogin = mongoose.model('admin',AdminLoginSchema);

module.exports = {
    User,
    AdminLogin
};