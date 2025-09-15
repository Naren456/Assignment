import Note from "../models/note.model.js";

// ➝ Create Note
export const createNote = async (req, res) => {
  try {
    const { Note_id, title, content, tags } = req.body;

    if (!Note_id || !title || !content) {
      return res.status(400).json({ message: "Note_id, title and content are required" });
    }

    // Ensure Note_id is unique
    const existing = await Note.findOne({ Note_id });
    if (existing) {
      return res.status(400).json({ message: "Note_id already exists" });
    }

    const note = await Note.create({ Note_id, title, content, tags });
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: "Error creating note", error: error.message });
  }
};

// Delete Note by Note_id
export const deleteNote = async (req, res) => {
  try {
    const { Note_id } = req.body;

    if (!Note_id) {
      return res.status(400).json({ message: "Note_id is required" });
    }

    const note = await Note.findOneAndDelete({ Note_id });

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting note", error: error.message });
  }
};

// Get All Notes 
export const getNotes = async (req, res) => {
  try {
    const { tag } = req.query;
    const filter = tag ? { tags: tag } : {};

    const notes = await Note.find(filter).sort({ createdAt: -1 });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching notes", error: error.message });
  }
};

//  Get Notes by Tags
export const getByTags = async (req, res) => {
  try {
    const { tags } = req.body;

    if (!tags || !Array.isArray(tags) || tags.length === 0) {
      return res.status(400).json({ message: "Tags must be a non-empty array" });
    }

    const notes = await Note.find({ tags: { $in: tags } });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching notes by tags", error: error.message });
  }
};

//  Get Note by Note_id
export const getById = async (req, res) => {
  try {
    const { Note_id } = req.params;

    const note = await Note.findOne({ Note_id });

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json(note);
  } catch (error) {
    res.status(500).json({ message: "Error fetching note", error: error.message });
  }
};
