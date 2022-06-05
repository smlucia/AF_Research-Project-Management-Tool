require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const path = require("path");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");

//student routes
const studentGroupRoute = require("./routes/student/studentGroupRoute");
const studentResearchTopicRoute = require("./routes/student/studentResearchTopicRoute");
const studentRequestSupervisorRoute = require("./routes/student/studentRequestSupervisorRoute");


//admin routes
const fileRoutes = require("./routes/file-upload-routes");
const subRoutes = require("./routes/submissionRoute");
const path = require("path");
const fileRoutes = require("./routes/file-upload-routes");
const subRoutes = require("./routes/submissionRoute");
const panelGroupRoutes = require("./routes/panelGroupRoute");
const panelRoute = require("./routes/panelRoute");

const supervisorRoute = require("./routes/supervisor-route");
const submissionRoute = require("./routes/su-submit-route");




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
app.use("/sub", subRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api', fileRoutes.routes);
app.use('/panel', panelGroupRoutes);
app.use("/panel-member", panelRoute);
app.use('/supervisor', supervisorRoute);
app.use('/supervisor', submissionRoute);

const port = process.env.PORT || 6005;
app.listen(port, console.log(`Listening on port ${port}...`));