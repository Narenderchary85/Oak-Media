import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from "dotenv"
import cors from "cors";
import jwt from "jsonwebtoken";
import AuthRouter from './Routes/AuthRoute.js'
import PostRouter from './Routes/PostRoute.js'
import UserRouter from './Routes/UserRoute.js'


const app=express();
app.use(cors())
dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.get('/',(req,res)=>{
    res.send("hello")
})

mongoose.connect(process.env.MONGO_DB,{
    useNewUrlParser:true
}).then(()=>{
    console.log("DB Connected")
});

app.use('/auth',AuthRouter);
app.use('/post',PostRouter);
app.use('/user',UserRouter);

app.listen(1000,()=>{
    console.log("server connected")
})