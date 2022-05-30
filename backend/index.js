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

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database successfully connected. ');
})


//add routes here

//Marking schemes function implemtation
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api', fileRoutes.routes);



const PORT = process.env.PORT || 5005;
app.listen(PORT);