
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./db");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");
const mongoose =  require("mongoose");
const bodyparser = require("body-parser");

//for uploading files
const path = require("path");
const fileRoutes = require("./routes/file-upload-routes");

const subRoutes = require("./routes/submissionRoute");

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: false
}));
app.use(cors());

//initialize database connection
mongoose.connect("mongodb+srv://user_1212:user123123@clusterno1.1hpvx.mongodb.net/rpmt_db?retryWrites=true&w=majority");


// database connection
connection();


// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/users", userRoute);
app.use("/auth", authRoute);

//Marking schemes function implemtation
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api', fileRoutes.routes);

//submissions
app.use("/sub", subRoutes);




const port = process.env.PORT || 6005;
app.listen(port, console.log(`Listening on port ${port}...`));
