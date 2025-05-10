import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from "dotenv"
import cors from "cors";
import jwt from "jsonwebtoken";
import AuthRouter from './Routes/AuthRoute.js'
import PostRouter from './Routes/PostRoute.js'
import UserRouter from './Routes/UserRoute.js'
import {Server} from 'socket.io';
import { createServer } from 'http';
import { socketHandler } from './Routes/SocketHandler.js';


const app=express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    },
});

app.use(cors())
dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/uploads', express.static('uploads'));

io.on("connection", (socket) => {
    console.log("Socket connected:", socket.id);
  
    socket.on("disconnect", () => {
      console.log("Socket disconnected:", socket.id);
    });
  });

socketHandler(io);

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

const PORT = process.env.PORT || 1000;
httpServer.listen(PORT, () => {
  console.log(`Server connected on port ${PORT}`);
});
