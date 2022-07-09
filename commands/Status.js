const setStatus = (client, status) => {
    client.user.setPresence({
      status: 'Being A Beeper',
      activity: {
        name: status
      }
    })
  }
  
  module.exports = {
 
    category: 'Configuration',
    description: 'Updates the status for the bot',
    
  
    minArgs: 1,
    expectedArgs: '<status>',
    
 
    ownerOnly: true,
    
   
    init: (client) => {
      
      const status = 'Testing' 
      setStatus(client, status)
    },
    
    
    callback: ({ client, text, message }) => {
      setStatus(client, text)
      
      
      
      message.reply({
        content: 'Status set!'
      })
    },
  }