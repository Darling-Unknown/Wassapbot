const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Initialize the client with session persistence
const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    // Display the QR code in the Render logs to scan it
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('WhatsApp bot is ready!');
});

client.on('message', async msg => {
    if (msg.body.toLowerCase() === 'hello') {
        msg.reply('Hello! How can I assist you?');
    }
});

client.initialize();
