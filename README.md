# MemoCloud Backend

MemoCloud Backend is a RESTful API for managing notes, built with Node.js, Express, and MongoDB.

## Features

- Create, retrieve, and delete notes
- Filter notes by tags
- Retrieve notes by unique Note ID
- MongoDB integration with Mongoose

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB database (Atlas or local)

### Installation

1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd Backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the `Backend` directory and add the following environment variables:
   ```env           
    DATABASE_URL=<your-mongodb-connection-string>   
    PORT=8000
    CloudJWT_SECRET=Memo
   ```

4. Start the server:
   ```sh
    npm start   
    ```
    The server will run on `http://localhost:8000` by default.

## API Endpoints
- `POST /api/notes/create`: Create a new note.
- `GET /api/notes/all`: Retrieve all notes, with optional tag filtering.
- `GET /api/notes/:Note_id`: Retrieve a note by its unique ID.

- `DELETE /api/notes/delete`: Delete a note by its unique ID.

- `GET /api/notes/tags`: Retrieve all unique tags.


## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
