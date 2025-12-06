import express from 'express';
// import bodyParser from 'body-parser';
const app = express();
app.use(express.json());
// app.use(bodyParser.json());

// get
app.get('/', (req, res) => {
    res.send("api success");
})

// post
app.post('/add-user', (req,res) => {
    let data = req.body;
    console.log(data);
    // logic to add data into database
    res.send("data added");
});
 
// put
app.put('/update-user',(req,res)=>{
    let mydata =req.body;
    console.log(mydata);
    //logic to update data in your database
    res.send("data updated");
});


// delete
app.delete('/delete-user',(req,res)=>{
    let myuser = req.post;
    console.log(myuser);
    //logic to delete data from your database
    res.send("data deleted");
});


app.listen(7000, () => {
    console.log(`server running at port ${7000}`);
})