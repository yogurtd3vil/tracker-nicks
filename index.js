const express = require('express');
const app = express();

app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`ping às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); //nao precisa definir a porta no env

//ping deploy heroku/replit 


const {Client} = require('discord.js');
const client = new Client({ intents: 32767 }) //intents necessarios


client.on("ready", () => {
console.log(` Tracking Usernames On  -> ${client.user.username}`)
});


//evento userUpdate -> nao dispara em selfbot <-
client.on("userUpdate", async function(oldUser, newUser) {
  if (oldUser && newUser) {
 if (oldUser.username != newUser.username) {
   //caso for salvar os nicks numa db, crie uma string e salve o ID depois salve o (oldUser.username) numa array
   console.log(`**${oldUser.id}** | ( ${oldUser.username} ) atualizou para: ( ${newUser.username} )`);
}
}
});


client.login("token do bot"); //process.env.TOKEN