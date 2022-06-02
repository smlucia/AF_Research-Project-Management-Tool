require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");
const studentGroupRoute = require("./routes/student/studentGroupRoute");
const studentResearchTopicRoute = require("./routes/student/studentResearchTopicRoute");
const studentRequestSupervisorRoute = require("./routes/student/studentRequestSupervisorRoute");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/users", userRoute);
app.use("/auth", authRoute);
app.use("/studentGroup", studentGroupRoute);
app.use("/researchTopicReg", studentResearchTopicRoute);
app.use("/requestSupervisor", studentRequestSupervisorRoute);


const port = process.env.PORT || 6005;
app.listen(port, console.log(`Listening on port ${port}...`));
