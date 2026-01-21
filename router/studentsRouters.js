import express from 'express';
import studentControllers from '../controllers/studentsControllers.js';
// import { getStudentsDetails, addStudents } from '../controllers/studentsControllers.js';
const router = express.Router();

// // RESTful endpoints
// router.get('/students', getStudentsDetails);
// router.get('/students/:id', getStudentsDetails);
// router.post('/students', addStudents);

// export default router;        

import multer from 'multer';
import path from 'path';

const Storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"uploads")
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})

const FileFilters = (req,file,cb) =>{
    const AllowedTypes = /png|jpg|jpeg|svg/
    const extension = path.extname(file.originalname).toLowerCase()
    if(AllowedTypes.test(extension)){
        cb(null,true)
    }
    else{
        cb(new Error("Not Valid Formate"))
    }
}

const Upload = multer({
    storage:Storage,
    fileFilter : FileFilters,
    limits:{
        fileSize:1024*1024*2
    }
})

router.post("/file-upload",Upload.array('file',3),studentControllers.UploadFile)

export default router;