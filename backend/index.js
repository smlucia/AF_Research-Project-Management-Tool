const express =  require("express");
const mongoose =  require("mongoose");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.json());


mongoose.connect("mongodb+srv://user_1212:user123123@clusterno1.1hpvx.mongodb.net/rpmt_db?retryWrites=true&w=majority");

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database successfully connected. ');
})

//add routes here

app.get("/" , (req, res) => {
    res.send({Project :" MernCrud"})
});

const PORT = process.env.PORT || 5005;
app.listen(PORT);