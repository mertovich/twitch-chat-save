const tmi = require('tmi.js');
const dotenv = require('dotenv');
const User = require('./model/User');
dotenv.config()

const client = new tmi.Client({
	options: { debug: false },
	identity: {
		username: process.env.MY_BOT_NAME,
		password: process.env.TOKEN
	},
	channels: [ process.env.CHANNEL ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

	if(message.toLowerCase() !== '') {
        let user =  new User(tags.username, message);
        console.log(user);
        user.save();
	}
});