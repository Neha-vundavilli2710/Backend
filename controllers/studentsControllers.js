// const getStudents = (req, res) => {
//     let stdData = {name: "aditya", roll: "1234"};
//     res.send(200).json({data: stdData});
// };
// const addStudents = (req, res) => {
//     res.status(201).json({message: "data added"});
// }
// export {getStudents, addStudents};  


// import student from "../modules/studentsModels.js";

// const getStudentsDetails = async (req, res) => {
//   try {
//     const students = await student.find();
//     return res.status(200).json({ data: students });
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// };

// const addStudents = async (req, res) => {
//   try {
//     const data = req.body;
//     if (!data || (typeof data === 'object' && Object.keys(data).length === 0)) {
//       return res.status(400).json({ error: "Request body is empty" });
//     }

//     // If body is an array => insertMany, otherwise create single document
//     const addedData = Array.isArray(data)
//       ? await student.insertMany(data)
//       : await student.create(data);

//     return res.status(201).json({ message: "Data added", data: addedData });
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// };

// export { getStudentsDetails, addStudents };


import student from "../modules/studentsModels.js";

const getStudentsDetails = async(req, res) => {
    try{
            // const mydata = await student.find();
            // const mydata = await student.findOne();
            const mydata = await student.findById({_id: "694b80caf0cee6258678668e"})
            res.status(200).json(mydata);
    }catch(error){
        console.log(error);
        res.status(500).json({error: error.message})
    }

};
const addStudents = async(req, res) => {
    try{
         const data = req.body;
    console.log(data);
    // const addeddata = await student.create(data);
    const addeddata = await student.insertMany(data);
    console.log(addeddata);
    res.status(201).json("data added");
    }catch(error){
        res.status(500).json({error: error.message}) 
    }
}; 
export {getStudentsDetails, addStudents}; 