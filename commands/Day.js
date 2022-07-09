module.exports = {
Name: 'Day',
Category: 'Utility',
Description: 'Responds with day report',

callback: ({ message }) => {

  let RandNum = Math.random(Math.floor() * 3);

if(RandNum === 1) {
  message.reply ({content : 'Umm.. Well.... Thinking about you... :))'})
}
if(RandNum === 2) {
  message.reply ({ Content: 'WIshing I had nitro...'})
}
if(RandNum === 3) {
  message.reply ({ content:'My day is amazing, thank you! Say, if you want to have an amazing day... head over to BeepTheBot.XYZ!!! I hear it holds some super cool stuff!!!'})
}
}


  }