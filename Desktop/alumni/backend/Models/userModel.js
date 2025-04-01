import mongoose from "mongoose";

const UserSchema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },    
    desc:{
        type:String,
        required:true
    },
    profilePicture:String,
    coverPicture:String,
    about:String,
    livesin:String,
    numposts:[],
    saved:[],
    tagged:[],
    followers:[],
    following:[],
},{
    timestamps:true
})

const UserModel=mongoose.model("UserSchema",UserSchema);
export default UserModel;