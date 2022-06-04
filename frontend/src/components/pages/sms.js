const moment = require('moment');

function convertMessage(username, text) {
    return {
        username,
        text,
        time: moment().format('h:mm a')
    };
}


module.exports = convertMessage;