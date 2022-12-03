import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({
    title:String,
    description:String,
    image:String,
    github:String,
    live:String,
})

const projectInfo = mongoose.model('ProjectInfo',projectSchema);
export  default projectInfo;