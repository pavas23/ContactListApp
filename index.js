const express = require("express");
const port = 8000;
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

/* we need to use body parser as the data recieved by the endpoint on submitting the form is
encoded and we need to convert it to json so that we can pass on further.*/
// here bodyParser is acting as a middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static("assets"));

// next in middleware is used to tell the app where to go next that is next searches more middlewares //if present and iterates over every middleware and at last goes to the endpoint on which request is //created.

// custom middleware1
// app.use(function(req,res,next){
//     console.log("middleware1 called");
//     next();
// });

// // middleware2
// app.use(function(req,res,next){
//     console.log("middleware2 called");
//     next();
// });

app.set("view engine","ejs"); // setting the template engine for this express app as EJS.
app.set("views",path.join(__dirname,'views')); // telling the app where the view files are located

var contactList = [
    {
        id:Date.now().toString(),
        name:"pavas",
        phone:"1111111111",
    },
    {
        id:Date.now().toString(),
        name:"arpan",
        phone:"2222223331",
    },
    {
        id:Date.now().toString(),
        name:"tony stark",
        phone:"9999999999"
    },
];

app.get("/",(req,res) =>{
    return res.render('home',{
        title:"My Contact List",
        contacts_list:contactList,
    });
});

app.post("/create-contact",(req,res) =>{
    contactList.push({
        id:Date.now().toString(),
        name:req.body.name,
        phone:req.body.phone,
    });
    return res.redirect("/");
})

// passing params in the url
// params can be normal params as well as query params
// query params
app.get("/delete-contact/",(req,res) =>{
    var id = req.query.id;
    for(let i=0;i<contactList.length;i++){
        if(contactList[i].id == id){
            contactList.splice(i,1);
            break;
        }
    }
    return res.redirect("/");
});

// params
// app.get("/delete-contact/:id",(req,res) =>{
//     var id = req.params.id;
//     for(let i=0;i<contactList.length;i++){
//         if(contactList[i].id == id){
//             contactList.splice(i,1);
//             break;
//         }
//     }
//     res.redirect("/");
// });

app.listen(port,(err) =>{
    if(err){
        console.log(err);
        return;
    }
    console.log(`app successfully started at port ${port}`);
});

