import mongoose from "mongoose";

// Moongodb Connect //
const ConnectDb = async () =>{
try {
   const connect  = await mongoose.connect(process.env.DATABASE_URL);
   console.log("DB connected")
} catch (error) {
  console.log(error)
}
}

export default ConnectDb;