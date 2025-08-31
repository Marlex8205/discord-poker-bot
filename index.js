const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

// ⚠️ Setze hier DEINEN Token ein (nicht öffentlich posten!)
const TOKEN = "MTQxMTcyNjk3NTAzNDMyNzE4MA.GT-073.P6bMCxviOlR82zxiz_ELHNFiE1FT5e5dDGFiGs";

client.once('ready', () => {
    console.log(`✅ Eingeloggt als ${client.user.tag}`);
});

// Einfaches Kartendeck
const suits = ['♠', '♥', '♦', '♣'];
const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];

function drawCard() {
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const value = values[Math.floor(Math.random() * values.length)];
    return `${value}${suit}`;
}

client.on('messageCreate', message => {
    if (message.content === "!poker") {
        const card1 = drawCard();
        const card2 = drawCard();
        message.reply(`Deine Karten: ${card1}, ${card2}`);
    }
});

client.login(TOKEN);
