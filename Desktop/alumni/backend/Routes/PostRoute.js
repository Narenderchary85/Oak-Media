import mongoose from "mongoose";
import express from "express";
import multer from "multer";
import PostModel from "../Models/postModel.js";
import UserModel from "../Models/userModel.js";
import jwt from "jsonwebtoken";


const router=express.Router();

const storage=multer.diskStorage({
    destination:(req,file,cb)=>cb(null,"uploads/"),
    filename:(req,file,cb)=>cb(null,Date.now()+'-'+file.originalname)
});

const uploads=multer({storage:storage});

const Skey="Oak"

const validateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Authorization header missing or invalid" });
    }
  
    const token = authHeader.split(" ")[1];
    try {
      const decoded = jwt.verify(token, Skey);
      if (!decoded.id || typeof decoded.id !== "string") {
        return res.status(400).json({ message: "Invalid user ID format in token" });
      }
  
      req.userId = decoded.id;
      next();
    } catch (error) {
      console.error("Token verification failed:", error);
      return res.status(401).json({ message: "Token is invalid or expired" });
    }
}

router.post('/addPost', uploads.single("image"), validateToken, async (req, res) => {
    const userId = req.userId;
    try {
        const post = new PostModel({
            userId: userId,
            desc: req.body.desc,  
            image: req.file ? `/uploads/${req.file.filename}` : null
        });

        const newPost = await post.save();
        res.status(200).json({ message: "Successfully uploaded post", user: newPost });
    } catch (err) {
        res.status(400).json({ message: "Failed to upload", error: err.message });
    }
});


router.get('/getPostOfUser',validateToken,async(req,res)=>{
    try{
        const userId=req.userId;
        const post=await PostModel.find({userId}).select("userId desc image likes comments share");
        res.status(200).json(post)
    }catch(err){
        res.status(400).json({message:"Failed to update",error:err.message})
    }
});

router.put('/updatePost/:id',async(req,res)=>{
    const postId=req.params.id
    const {userId}=req.body
    try{
        const post=await PostModel.findById(postId);

        if(post.userId===userId){
            await post.updateOne({$set:req.body});
            res.status(200).json({message:"updated post"})
        }else{
            res.status(500).json("Post Not updated");
        }

    }catch(err){
        res.status(400).json({message:"Failed to update",error:err.message})
    }
});

router.delete('/deletePost/:id',async(req,res)=>{
    const postId=req.params.id
    const {userId}=req.body
    try{
        const post=await PostModel.findById(postId);

        if(post.userId===userId){
            await post.deleteOne();
            res.status(200).json("POst deleted successfully");
        }else{
            res.status(500).json("Post Not Deleted");
        }

    }catch(err){
        res.status(400).json({message:"Failed to Deleted",error:err.message})
    }
});

router.post('/likePost/:id',async(req,res)=>{
    const postId=req.params.id
    const {userId}=req.body
    try{
        const post=await PostModel.findById(postId)
        if(!post.likes.includes(userId)){
            await post.updateOne({$push:{likes:userId}});
            res.status(200).json("liked post successfully");
        }else{
            await post.updateOne({$pull:{likes:userId}});
            res.status(200).json("unLiked post successfully");
        }
    }catch(err){
        res.status(400).json({message:"Failed to like the post",error:err.message})
    }
});

router.put('/savepost/:id',async(req,res)=>{
    const postId=req.params.id
    const {userId}=req.body
    try{
        const post=await PostModel.findById(postId);
        const user=await UserModel.findById(userId)
        if(!post.saved.includes(userId)){
            await user.updateOne({$push:{saved:postId}});
            res.status(200).json("saved post successfully");
        }else{
            await post.updateOne({$pull:{saved:postId}});
            res.status(200).json("unsaved post successfully");
        }
    }catch(err){
        res.status(400).json({message:"Failed to save the post",error:err.message})
    }
});

router.get('/getallpost',async(req,res)=>{
    try{
        const post=await PostModel.find();
        res.status(200).json(post)
    }catch(err){
        console.log(err.message);
    }
})


export default router;