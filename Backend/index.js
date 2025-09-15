import express from "express"
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT || 8000
const app =  express();

app.get("/",(req,res)=>{
   res.send('Hello World')
})




//---Listen--//
app.listen(8000,()=>{
    console.log(`Server listening at ${8000}`)
})