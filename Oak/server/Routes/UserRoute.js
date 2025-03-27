import mongoose from "mongoose";
import UserModel from "../Models/userModel.js";
import express from "express";
import jwt from "jsonwebtoken";

const router=express.Router();
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

router.get('/allusers',validateToken,async(req,res)=>{
    try{
        const userId=req.userId;
        const users = await UserModel.find({ _id: { $ne: userId } }).select('-password');
        res.status(200).json(users);
    }catch(err){
        res.status(500).json({message:err.message});
    }
})


router.get('/getuser',validateToken,async(req,res)=>{
    const userId=req.userId;
    try{
        const user=await UserModel.findById(userId).select("-password");
        res.status(200).json(user);
    }catch(err){
        res.status(500).json({message:err.message});
    }
})

router.put('/follow/:id',validateToken,async(req,res)=>{
    const otherId=req.params.id;
    const userId=req.userId;
    try{
        const user=await UserModel.findById(userId);
        const otheruser=await UserModel.findById(otherId)
        if(!user.following.includes(otherId)){
            await user.updateOne({$push:{following:otherId}});
            await otheruser.updateOne({$push:{followers:userId}});
            res.status(200).json({ 
                message: "User followed!", 
                followers: otheruser.followers 
            });
        }else {
            res.status(403).json("User is Already followed by you");
          }
    }catch(err){
        res.status(400).json({message:"failed to updated the follwer"})
    }
});

router.put('/unfollow/:id',validateToken,async(req,res)=>{
    const otherId=req.params.id;
    const userId=req.userId;
    try{
        const user=await UserModel.findById(userId);
        const otheruser=await UserModel.findById(otherId)
        if(user.following.includes(otherId)){
            await user.updateOne({$pull:{following:otherId}});
            await otheruser.updateOne({$pull:{followers:userId}});
            res.status(200).json("User Unfollowed!");
        }else {
            res.status(403).json("User is Already Unfollowed by you");
          }
    }catch(err){
        res.status(400).json({message:"failed to updated the Unfollwer"})
    }
});

export default router;
