import express from "express";
import jwt from "jsonwebtoken";
import UserModel from "../Models/userModel.js";
import multer from "multer";

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

router.post("/signin", async (req, res) => {
  try {
      if (!req.body) {
          return res.status(400).json({ message: "Invalid request body" });
      }

      const { email, username, password, firstname, lastname } = req.body;

      if (!email || !username || !password || !firstname || !lastname) {
          return res.status(400).json({ message: "Missing required fields" });
      }
      const older = await UserModel.findOne({ email });
      if (older) {
          return res.status(400).json({ message: "User already exists" });
      }

      const newUser = new UserModel({ email, username, password, firstname, lastname });
      const user = await newUser.save();
      const token = jwt.sign(
          { username: user.username, id: user._id },
           Skey  ,
          { expiresIn: "3h" }
      );

      res.status(200).json({ message: "Signup Successful", token });
  } catch (err) {
      console.error("Signup Error:", err);
      res.status(500).json({ message: "Signup Failed", error: err.message });
  }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const token = jwt.sign(
            { username: user.username, id: user._id },
            Skey,
            { expiresIn: "3h" }
        );

        res.status(200).json({ message: "Login Successful", token, id: user._id });

    } catch (err) {
        console.error("Login Error:", err);
        res.status(500).json({ message: "Failed Login", error: err.message });
    }
});

const storage=multer.diskStorage({
    destination:(req,file,cb)=>cb(null,"uploads/"),
    filename:(req,file,cb)=>cb(null,Date.now()+'-'+file.originalname)
});

const uploads=multer({storage:storage});

router.put('/update-profile',uploads.single("profilePicture"),validateToken,async(req,res)=>{
    try{
        const userId=req.userId;
        const updateFields=req.body;
        console.log(userId);

        if(req.file){
            updateFields.profilePicture=`/uploads/${req.file.filename}`
        }

        const updatedUser=await UserModel.findByIdAndUpdate(
            userId,
            { $set:updateFields },
            { new:true, runValidators:true }
        )
        res.status(200).json({message:"Successfully to updated",user:updatedUser})
    }catch(err){
        res.status(400).json({message:"Failed to update",error:err.message})
    }
})


export default router;