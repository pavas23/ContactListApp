const mongoose = require("mongoose");

// to create schema for contact list
const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
});

// to finalise the schema into model/collection
const Contact = mongoose.model("Contact",contactSchema);

// to export the module
module.exports = Contact;


