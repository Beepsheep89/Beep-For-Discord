const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
const path = require('path')




const { Intents } = DiscordJS

const client = new DiscordJS.Client({
  // These intents are recommended for the built in help menu
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_VOICE_STATES,
  ],
})



client.on('ready', () => {
  new WOKCommands(client, {
    // The name of the local folder for your command files
    commandsDir: path.join(__dirname, 'commands'),
    featuresDir: path.join(__dirname, 'features'),
  })
})



const { DisTube } = require('distube');
const { SpotifyPlugin } = require('@distube/spotify');
const { SoundCloudPlugin } = require('@distube/soundcloud')

client.distube = new DisTube(client, {
    emitNewSongOnly: true,
    leaveOnFinish: true,
    emitAddListWhenCreatingQueue: false,
    plugins: [new SpotifyPlugin(), new SoundCloudPlugin(),]
});
module.exports = client;





client.login('OTUyNDg2NzY1MTgzMjU0NTY4.GMoXYI.fwqpVQiQoSqw0dQwuJkuORxQmN8srCm-fim-Jk');




