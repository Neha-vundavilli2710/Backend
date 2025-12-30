import express from 'express';
import {getStudentsDetails, addStudents} from '../controllers/studentsControllers.js';
const router = express.Router();
router.get('/get-students', getStudentsDetails);
router.post('/add-students', addStudents);
export default router;