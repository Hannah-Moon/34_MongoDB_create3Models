// Models are a representation of our data. 
// Schema: We create a blueprint for the model so we can export that format to our express server and eventually link
// Schema?? What the data should look like when saved to the database. How it’s organized.

const mongoose = require("mongoose")    
const noteSchema = new mongoose.Schema({
    title: String,
    body:  String
})

const Note = mongoose.model("Note", noteSchema)

module.exports = Note