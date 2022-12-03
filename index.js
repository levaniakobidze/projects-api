import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors'
import projectsRouter from "./routes/projects.js";
import mongoose from "mongoose";
const app = express();
import dotenv from 'dotenv'
dotenv.config()

app.use(bodyParser.json({limit:'30gb',extended:true}))
app.use(bodyParser.urlencoded({limit:'30gb',extended:true}))
app.use(cors())
app.use('/projects', projectsRouter)
// DATA BASE CONNECTION VARIABLES
const CONNECTION_URL = 'mongodb+srv://Levaniakobidze:iakobidze123@cluster0.cqyrecr.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// DATA BASE CONNECTION
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(() => app.listen(PORT,() => console.log(`Server running on port ${PORT}...`)))
.catch(err => console.log(err.message))