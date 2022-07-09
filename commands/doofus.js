module.exports = {
   Name: 'Doofus',
   Category: 'Utility',
   description: 'Responds with doofus',
   callback: ({ message }) => {
      message.reply({ content: 'I know you are but what am I?'})
   }
}