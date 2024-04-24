require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const connecToDB = require("./config/connectToDB.js");

// Models
const Note = require("./models/note");
const Account = require("./models/account");
const Customer = require("./models/customer");

// Controller 
const notesController = require("./controller/notesControllers.js")
const accountsController = require("./controller/notesControllers.js")
const customersController = require("./controller/customerControllers.js")


const cors = require("cors");

app.use(express.urlencoded());    /// --> We need to add this line of code everytime to POST the data on POSTMAN. 
app.use(express.json());

app.use(cors());
connecToDB();





app.get("/", (req, res) => {
    res.send("This is a Landing Page");
})

// ------------------------------ [ Note ]

app.get("/notes", notesController.fetchAllNotes);

app.get("/notes/:id", notesController.fetchNote);

app.post("/notes", notesController.createNote);

app.put("/notes/:id", notesController.updateNote);

app.delete("/notes/:id", notesController.deleteNote);


// ------------------------------ [ Account ]
app.get('/accounts', accountsController.fetchAllAccounts);

app.post("/accounts", accountsController.createAccount);

app.put("/accounts/:id", accountsController.updateAccount);


// ------------------------------ [ Customer ]
app.get('/customers', customersController.fetchAllCustomers);

app.post("/customers", customersController.createCustomer);

app.put("/customers/:id", customersController.updateCustomer);







app.listen(PORT, () => {
    console.log(`Express Server Listening on port num: ${PORT}`);
});
