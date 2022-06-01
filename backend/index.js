const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const convertMessage = require('../frontend/pages/sms');
const {
    memberJoin,
    getCurrentmember,
    memberLeave

} = require('../frontend/pages/members');



const app = express();
const host = http.createServer(app);
const sckt = socketIO(host);

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


host.listen(PORT, () => console.log('Backend is runnning on port ' + PORT));