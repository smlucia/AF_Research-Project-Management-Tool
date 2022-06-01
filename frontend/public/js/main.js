const chatBox = document.getElementById('chat-box');
const chatSMS = document.querySelector('.chat-messages');


const { username, group } = Qs.parse(location.search, {
    ignoreQueryPrefix: true
});


const sckt = io();

sckt.emit('joinGroup', { username, group });

sckt.on('message', message => {
    console.log(message);
    outputSMS(message);

    //scroll down
    chatSMS.scrollTop = chatSMS.scrollHeight;
});

//send msg
chatBox.addEventListener('submit', (e) => {
    e.preventDefault();

    const sms = e.target.elements.sms.value;
    sckt.emit('chatSMS', sms);

    //clear input field
    e.target.elements.sms.value = "";
    e.target.elements.sms.focus();

});

function outputSMS(message) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = '<p class="meta">' + message.username + '<span style="margin-left:20px";>' + message.time + '</span></p><p class="text">' + message.text + '</p>';


    document.querySelector('.chat-messages').appendChild(div);
}