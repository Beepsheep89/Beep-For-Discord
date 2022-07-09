module.exports = {
    Name: 'Help',
    Category: 'Utility',
    description: 'Responds with COmmands and features',
    callback: ({ message }) => {
       message.reply({ content: 'Here you go. Ill help. !Author is my credits. !doofus is an insult. !day is nice. !help is what ur reading. Ping is basic. And nothing else lol.'})
    }
 }