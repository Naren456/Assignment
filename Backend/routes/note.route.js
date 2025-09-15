import express from "express"
import { createNote ,getNotes } from "../controllers/note.controller.js"
const noteRouter = express.Router()

noteRouter.post("/createNote",createNote);
noteRouter.get("/getNotes",getNotes)

export default noteRouter;
