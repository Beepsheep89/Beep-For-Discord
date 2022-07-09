module.exports = {
    category: 'Testing',
    description: 'Replies with pong', 
    
    slash: 'both', 
    testOnly: false, 
    
    callback: ({ message, interaction }) => {
      const reply = 'Okay Ill try... ahem. POOOOOOOOOOOOOOOOOOOOOOOOOOOOOONG'
  
    
      if (message) {
        message.reply({
          content: reply
        })
        return
      }
  
     
      interaction.reply({
        content: reply
      })
      
      
      return {
        content: reply
      }
    },
  }