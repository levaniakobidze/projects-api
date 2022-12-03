import express from 'express';
const router  = express.Router();
import {createProject, getProjects, deleteProject} from '../controller/projects.js'

router.get('/',getProjects)
router.post('/',createProject)
router.delete('/:id',deleteProject)




export default router