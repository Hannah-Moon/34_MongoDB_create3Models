require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const connecToDB = require("./config/connectToDB.js");
const Note = require("./models/note");
const notesController = require("./controller/notesControllers.js")
const cors = require("cors");

app.use(express.urlencoded());
app.use(express.json());

app.use(cors());
connecToDB();

app.get("/", (req, res) => {
    res.send("This is a Landing Page");
})

app.get("/notes", notesController.fetchAllNotes);

app.get("/notes/:id", notesController.fetchNote);

app.post("/notes", notesController.createNote);

app.put("/notes/:id", notesController.updateNote);

app.delete("/notes/:id", notesController.deleteNote);


app.listen(PORT, () => {
    console.log(`Express Server Listening on port num: ${PORT}`);
});
