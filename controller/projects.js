import projectInfo from "../models/projectInfo.js";

export const getProjects = async (req,res) => {
    try {
        const projectInfos = await projectInfo.find();
        res.status(200).json(projectInfos)

    }catch (err){
        res.status(404).json({error:err.message})
    }
}

export const createProject = async (req,res) => {
    const project = req.body;
    const newProject  = new projectInfo(project)
    try{
        await newProject.save();
        res.status(201).json(newProject);
    }catch(err){
        res.status(409).json({error:err.message})
    }

}
export const deleteProject = async (req,res) => {
   const id = req.params.id;
   console.log(id)
    try{
        await projectInfo.findOneAndDelete(id);
        const projects = new projectInfo()
        res.status(200).send(projects)
    }catch(err){
        res.status(409).json({error:err.message})
    }

}
