import express from "express";
import {
  createNote,
  getNotes,
  deleteNote,
  getById,
  getByTags,
} from "../controllers/note.controller.js";

const noteRouter = express.Router();

noteRouter.post("/create", createNote);

noteRouter.get("/all", getNotes);

noteRouter.delete("/delete", deleteNote);

noteRouter.get("/:Note_id", getById);

noteRouter.post(`/getbyTag`, getByTags);

export default noteRouter;
