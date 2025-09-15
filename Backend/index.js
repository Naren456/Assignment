import express from "express"
import dotenv from "dotenv"
import ConnectDb from "./config/db.js"

import noteRouter from "./routes/note.route.js"
dotenv.config()

const PORT = process.env.PORT || 8000
const app =  express();

//middleware//
app.use(express.json()); 



ConnectDb()


// routes //

app.use("/api/note",noteRouter)



// test //
app.get("/",(req,res)=>{
   res.send('Hello World')
})





//---Listen--//
app.listen(8000,()=>{
    console.log(`Server listening at ${8000}`)
})