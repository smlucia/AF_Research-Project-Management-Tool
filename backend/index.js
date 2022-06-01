require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");

const app = express();
const host = http.createServer(app);
const sckt = socketIO(host);

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/users", userRoute);
app.use("/auth", authRoute);

const port = process.env.PORT || 6005;
app.listen(port, console.log(`Listening on port ${port}...`));

const socketIO = require('socket.io');
const convertMessage = require('../frontend/pages/sms');
const {
    memberJoin,
    getCurrentmember,
    memberLeave

} = require('../frontend/pages/members');




app.use(express.static(path.join(__dirname, '../frontend/public')));

const stName = 'Admin';

sckt.on('connection', socket => {

    socket.on('joinGroup', ({ username, group }) => {
        const member = memberJoin(socket.id, username, group);



        socket.join(member.group);

        socket.emit('message', convertMessage(stName, 'welcome to the group '));

        socket.broadcast.to(member.group).emit('message', convertMessage(stName, member.username + '  has joined'));


    });


    //get msgs
    socket.on('chatSMS', (sms) => {

        const member = getCurrentmember(socket.id);

        sckt.to(member.group).emit('message', convertMessage(member.username, sms));

    });


    socket.on('disconnect', () => {
        const member = memberLeave(socket.id);


        if (member) {
            sckt.to(member.group).emit('message', convertMessage(stName, member.username + '  has left the chat'));


        }


    });
});








const PORT = 3000 || process.env.PORT;

