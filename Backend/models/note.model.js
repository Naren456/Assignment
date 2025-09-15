import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    Note_id:{
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,           
    },
    content: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],       
      default: [],
    },
  },
  { timestamps: true }       
);



const Note = mongoose.model("Note", noteSchema);

export default Note;
