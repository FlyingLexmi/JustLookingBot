const mineflayer = require('mineflayer');
const { Intents } = require('discord.js');
const Discord = require('discord.js');
const { sendPlayerList8b } = require('./src/player_list_8b');
const { sendPlayerList9b } = require('./src/player_list_9b');
const { sendPlayerList0b } = require('./src/player_list_0b');
const { chatllog8b8t, chatllog9b9t, chatllog0b0t } = require('./src/chat_logs');
const path = require('path');
const fs = require('fs');

const chatFilePath8b = 'logs/8b8t/8b8t.txt';
const chatFilePath9b = 'logs/9b9t/9b9t.txt';
const chatFilePath0b = 'logs/0b0t/0b0t.txt';

const bot8b = {
    host: '8b8t.me',
    version: '1.12.2',
    username: 'TakUma'
};

const bot9b = {
    auth: 'microsoft',
    host: '9b9t.org',
    version: '1.12.2',
    username: 'FlyingLexmi'
};

const bot0b = {
    auth: 'microsoft',
    host: '0b0t.org',
    version: '1.12.2',
    username: 'FlyingLexmi'
};

const discordToken = 'MTIwOTEzMzg5MjI5NzE2Mjc3Mg.GZ5jQX.pdRoUYp_EKjXuF62s6ChNyIKp5b9PWe3Br_fck';
const discordClient = new Discord.Client({ intents: [Intents.FLAGS.GUILD_MESSAGES] });

const bot8b8t = mineflayer.createBot(bot8b);
const bot9b9t = mineflayer.createBot(bot9b);
const bot0b0t = mineflayer.createBot(bot0b);

let lastMessageId = null;


let hasSentPlayerList = false;

bot8b8t.on('login', () => {
    console.log('________Бот успешно подключен к серверу. 8b8t________');
});

bot9b9t.on('login', () => {
    console.log('________Бот успешно подключен к серверу. 9b9t________');
});

bot0b0t.on('login', () => {
    console.log('________Бот успешно подключен к серверу. 0b0t________');
});

discordClient.on('ready', () => {
    console.log('Discord бот готов!');
});

bot8b8t.on('playerLeft', (player) => {
    const onlinePlayers = Object.keys(bot8b8t.players).join(', ');
    sendPlayerList8b(onlinePlayers);
});

bot8b8t.on('playerJoined', (player) => {
    const onlinePlayers = Object.keys(bot8b8t.players).join(', ');
    if (onlinePlayers && !hasSentPlayerList) {
        sendPlayerList8b(onlinePlayers);
        bot8b8t.chat('/l troltrol');
        bot8b8t.chat('/8b8t');
        hasSentPlayerList = true;
    }
});

bot9b9t.on('playerLeft', (player) => {
    const onlinePlayers = Object.keys(bot9b9t.players).join(', ');
    sendPlayerList9b(onlinePlayers);
});

bot9b9t.on('playerJoined', (player) => {
    const onlinePlayers = Object.keys(bot9b9t.players).join(', ');
    if (onlinePlayers && !hasSentPlayerList) {
        sendPlayerList9b(onlinePlayers);
        hasSentPlayerList = true;
    }
});

bot0b0t.on('playerLeft', (player) => {
    const onlinePlayers = Object.keys(bot0b0t.players).join(', ');
    sendPlayerList0b(onlinePlayers);
});

bot0b0t.on('playerJoined', (player) => {
    const onlinePlayers = Object.keys(bot0b0t.players).join(', ');
    if (onlinePlayers && !hasSentPlayerList) {
        sendPlayerList0b(onlinePlayers);
        hasSentPlayerList = true;
    }
});

bot8b8t.on('chat', (username, message) => {
    const chatMessage = `<${username}> ${message}`;
    chatllog8b8t(chatMessage, chatFilePath8b);
});

bot9b9t.on('chat', (username, message) => {
    const chatMessage = `<${username}> ${message}`;
    chatllog9b9t(chatMessage, chatFilePath9b);
});

bot0b0t.on('chat', (username, message) => {
    const chatMessage = `<${username}> ${message}`;
    chatllog0b0t(chatMessage, chatFilePath0b);
});

discordClient.login(discordToken);
