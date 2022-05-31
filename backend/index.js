require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/users", userRoute);
app.use("/auth", authRoute);

const port = process.env.PORT || 5005;
app.listen(port, console.log(`Listening on port ${port}...`));
