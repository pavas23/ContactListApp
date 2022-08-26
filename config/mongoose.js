const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/contacts_list_db");

// acquire the connection (to check we have connected to mongodb)
const db = mongoose.connection;

//error
db.on("error",console.error.bind(console,'error connecting to mongodb'));

//if up and running then print the message
db.once('open',()=>{
    console.log("Connected successfully to MongoDB !")
});

