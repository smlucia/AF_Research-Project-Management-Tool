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
const panelRoute = require("./routes/panelRoute");



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
app.use("/panel-member", panelRoute);


const port = process.env.PORT || 6005;
app.listen(port, console.log(`Listening on port ${port}...`));


