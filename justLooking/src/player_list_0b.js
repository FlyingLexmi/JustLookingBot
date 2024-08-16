//code by flyinglexmi

const { Client, Intents } = require('discord.js');

const discordToken = 'MTIwOTEzMzg5MjI5NzE2Mjc3Mg.GZ5jQX.pdRoUYp_EKjXuF62s6ChNyIKp5b9PWe3Br_fck'; 

const discordClient = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


async function sendPlayerList0b(players) {
    const playerListMessage = '```\n' + `players online: ${players || 'нету'}` + '\n```';
    const channel = discordClient.channels.cache.get("1211699514109595648");

    if (!channel) {
        return;
    }
    
    try {
        const fetchedMessage = await channel.messages.fetch(); 
        const existingMessage = fetchedMessage.find(msg => msg.author.bot); 
        if (existingMessage) {
            await existingMessage.edit(playerListMessage); 
            console.log("0b0t list was upated");
        } else {
            const newMessage = await channel.send(playerListMessage); 
        }
    } catch (err) {
        console.error('Ошибка при отправке/редактировании сообщения в Discord:', err);
    }
}
discordClient.on('ready', () => {});
discordClient.login(discordToken);
module.exports = { sendPlayerList0b };

