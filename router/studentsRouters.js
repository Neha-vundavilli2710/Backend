import express from 'express';
import { getStudentsDetails, addStudents } from '../controllers/studentsControllers.js';
const router = express.Router();

// RESTful endpoints
router.get('/students', getStudentsDetails);
router.get('/students/:id', getStudentsDetails);
router.post('/students', addStudents);

export default router;        