ow // import http from 'http';
// const server = http.createServer((req,res) => {
//     console.log(req.method);
//     if(req.url == "/users"){
//         res.writeHead(200, {"Content-Type": "application/json"});
//         res.end(JSON.stringify({name: "thub"}))
//     } else {
//         res.writeHead(200, {"content-type": "text/html"});
//         res.end("Hello this is from backend");
//     }
// });
// server.listen(7007, () => {
//     console.log(`server running at port ${7007}`);
// }) 



// import express from 'express';
// const app = express();
// app.get('/users', (req, res) => {
//     res.send("hello this is from backend");
// })
// app.get('/get-users', (req, res) => {
//     res.send("hello this is from backend");
// })
// app.listen(7007, () => {
//     console.log(`server running at port ${7007}`);
// });


// import express from 'express';
// import router from './routers/StudentRouter.js';
// const app = express(); 
// app.use(express.json());//Middleware
// app.use('/',router);app.listen(7007, () => {
//     console.log(`server running at port ${7007}`); 
// }); 


// import express from 'express';
// import studentsRoutes from './routers/StudentRouter.js';
// import cors from 'cors';

// const app = express();
// app.use(express.json());
// app.use(cors());
// app.use('/',studentsRoutes);

// app.listen(7007, () => {
//     console.log(`server running at port 7007`);  
// });





// import express from 'express';
// import cors from 'cors';
// import mongoose, { mongo } from 'mongoose';
// import studentRouter from './router/studentsRouters.js';

// const app = express();
// app.use(express.json());
// app.use(cors());

// // Prefer setting MONGO_URI in environment variables for security. If not set, fall back to the encoded URI below.
// const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://nehavundavilli27_db_user:Neha%402706@cluster0.ewa7lea.mongodb.net/?retryWrites=true&w=majority";

// mongoose.connect(MONGO_URI)
//   .then(() => console.log("db connected"))
//   .catch((error) => {
//     console.error("MongoDB connection error:", error);
//     // Exit process if DB connection fails so the issue is visible and process can restart in dev.
//     process.exit(1);
//   });

// app.use('/', studentRouter);
// app.get('/users', (req, res) => {
//     console.log("hello this is");
//     res.send("hello this is from backend");
// })

// app.listen(7007, () => {
//     console.log("server running at port 7007")
// });





import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import studentRouter from './router/studentsRouters.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(express.json());
app.use(cors());


// const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://nehavundavilli27_db_user:Neha%402706@cluster0.ewa7lea.mongodb.net/?retryWrites=true&w=majority";

// mongoose.connect(MONGO_URI)
//   .then(() => console.log("db connected"))
//   .catch((error) => {
//     console.error("MongoDB connection error:", error);
    
//   });

// app.use('/', studentRouter);
// app.get('/users', (req, res) => {
//     console.log("hello this is");
//     res.send("hello this is from backend");
// })

app.use(express.static(path.join(__dirname,"uploads")));

app.listen(7007, () => {
    console.log("server running at port 7007")
});