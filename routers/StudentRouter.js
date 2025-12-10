import express from 'express';
import {getStudents, addStudents} from '../controllers/StudentController.js';
const router = express.Router();
router.get('/get-students', getStudents);
router.post('/add-students', addStudents);
export default router;