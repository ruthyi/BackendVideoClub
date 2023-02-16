// require("dotenv").config();
const cors = require('cors'); //requires the cors module, which is used to config server.headers
// const mongoURI = process.env.MONGO_URI;

const express = require("express");  // requires the Express library, which is used to create a web server.
const mongoose = require("mongoose") // requires the Mongoose library  -- which is used to connect to a MongoDB database.
const port = 3030;
const app = express();//Uses the Express library to create the server

// which is used to connect to a MongoDB database.
const todoRoutes = require("./routes/todoRoutes"); //requires the todoRoutes file,ENDPOINST


const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

app.use(express.json()); //Used to parse incoming or transform requests with JSON loads

const corsOption={
  origin:"*",
  method:["GET", "POST", "PUT", "DELETE"],
  allowedHeaders:["Origin", "X-Requested-With", "Content-Type", "Accept"],
  credentials: true
};

app.use(cors(corsOption));

const use="todolist";
const password='1234';
const dbname='VideoClub';

const url = `mongodb+srv://${use}:${password}@bd.y5qzq9a.mongodb.net/${dbname}?retryWrites=true&w=majority`;

//connect to mongo atlas(cluster) > todo(db) > todos (collection)
mongoose.set("strictQuery", false);
mongoose.connect(url,connectionOptions).then(()=>console.log("Conexion exitosa")).catch((err)=> console.error(err));

app.use("/App",todoRoutes );


app.listen(port, ()=>{
  console.log("mi puerto es: "+port);
})
// console.log("Hola Mundo");
