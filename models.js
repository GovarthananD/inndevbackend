import mongoose, { mongo } from "mongoose";


const userSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        trim:true
    },
    firstname:{
        type:String,
        required:true,
        trim:true
    },
    lastname:{
        type:String,
        required:true,
        trim:true
    },
    companyname:{
        type:String,
        required:true,
        trim:true
    },
    age:{
        type:String,
        required:true,
        trim:true
    },
    city:{
        type:String,
        required:true,
        trim:true
    },
    state:{
        type:String,
        required:true,
        trim:true
    },
    zip:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    web:{
        type:String,
        required:false,
        trim:true
    },
});

const User = mongoose.model("User", userSchema);
export {User};