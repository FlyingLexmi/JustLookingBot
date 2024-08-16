const path = require('path');
const fs = require('fs');

function appendMessageWithTime(message, filePath) {
    const time = new Date().toLocaleString();
    const messageWithTime = `[${time}] ${message}`;
    fs.appendFileSync(filePath, messageWithTime + '\n', 'utf-8');
}

function chatllog8b8t(message, filePath) {
    appendMessageWithTime(message, filePath);
}

function chatllog9b9t(message, filePath) {
    appendMessageWithTime(message, filePath);
}

function chatllog0b0t(message, filePath) {
    appendMessageWithTime(message, filePath);
}



module.exports = { chatllog8b8t, chatllog9b9t, chatllog0b0t };
