import mongoose from "mongoose";

const PostSchema=mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    desc:{ type:String },
    image:{ type:String },
    likes:[],
    comments:[],
    share:[],
    postCount:Number
},{
    timestamps:true
})

const PostModel=mongoose.model("PostSchema",PostSchema);
export default PostModel;