<<<<<<< HEAD
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");
=======
const express =  require("express");
const mongoose =  require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
//for uploading files
const path = require("path");
const fileRoutes = require("./routes/file-upload-routes")

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: false
}));
app.use(cors());

//initialize database connection
mongoose.connect("mongodb+srv://user_1212:user123123@clusterno1.1hpvx.mongodb.net/rpmt_db?retryWrites=true&w=majority");
>>>>>>> c387a0ec7cbb02a516e570efae8ccd1844105892

// database connection
connection();

<<<<<<< HEAD
// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/users", userRoute);
app.use("/auth", authRoute);
=======

//add routes here

//Marking schemes function implemtation
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api', fileRoutes.routes);


>>>>>>> c387a0ec7cbb02a516e570efae8ccd1844105892

const port = process.env.PORT || 5005;
app.listen(port, console.log(`Listening on port ${port}...`));
