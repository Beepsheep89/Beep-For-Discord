module.exports = {
    Name: 'Author',
    Category: 'Utility',
    description: 'Responds with Credits',
    callback: ({ message }) => {
       message.reply({ content: 'Thanks for asking! I was created by my owner. His name is @Beep#5410. The little fool doesnt even have nitro, but I still love him.'})
    }
 }