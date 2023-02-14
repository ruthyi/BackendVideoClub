require("dotenv").config();
const cors = require('cors'); //requires the cors module, which is used to config server.headers
const mongoURI = process.env.MONGO_URI;

const express = require("express");  // requires the Express library, which is used to create a web server.
const mongoose = require("mongoose") // requires the Mongoose library  -- which is used to connect to a MongoDB database.
const port = 3030;
const app = express();//Uses the Express library to create the server
//valentinaparte1
// which is used to connect to a MongoDB database.
const todoRoutes = require("./routes/todoRoutes"); //requires the todoRoutes file,ENDPOINST
const connectionOptions = { useUnifiedTopology: true,
useNewUrlParser: true};

app.use(express.json()); //Used to parse incoming or transform requests with JSON loads


app.use(cors());

//connect to mongo atlas(cluster) > todo(db) > todos (collection)
mongoose.set("strictQuery", false);
mongoose.connect(mongoURI,connectionOptions).then(()=>console.log("Conexion exitosa")).catch((err)=> console.error(err));

app.use("/App",todoRoutes );


app.listen(port, ()=>{
  console.log("mi puerto es: "+port);
})
// console.log("Hola Mundo");
