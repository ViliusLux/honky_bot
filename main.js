//make bot alive
const Discord = require('discord.js');
//prefix, token
const { prefix, token } = require('./config.json');
//open client
const client = new Discord.Client();
//online
client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('Use $help', { type: 'PLAYING' })
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  .catch(console.error);
 });
//commands that suck
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();

    if (message.content.startsWith(`${prefix}ping`)) {
        message.channel.send('Pong.');
        message.author.send('pong!');
        message.author.send('pong!');
        message.author.send('pong!');
        message.author.send('pong!');
        message.author.send('pong!');
        message.author.send('pong!');
        message.author.send('pong!');
        message.author.send('pong!');
        message.author.send('pong!');
        message.author.send('pong!');
        message.author.send('pong!');
        message.author.send('pong!');
        message.author.send('pong!');
    } else if (message.content.startsWith(`${prefix}bonk`)) {
        message.channel.send('***Bot will remember that***');
    } else if (message.content.startsWith(`${prefix}dev`)) {
        console.log('Someone pinged you')
        message.react('👀');
        message.channel.send('**You pinged the developer/s!**')
    } else if (message.content.startsWith(`${prefix}info`)) {
        message.channel.send(`**HONK** ${message.guild.name}`)
    } else if (message.content.startsWith(`${prefix}help`)) {
        message.channel.send(`1. bonk 2. info 3. ping 4. eat 5. emoji 6. everyone`)
    } else if (message.content.startsWith(`${prefix}eat`)) {
        message.channel.send('**Nom Nom nom...**')
    } else if (message.content.startsWith(`${prefix}secret`)) {
        message.channel.send('Shhh...')
    } else if (message.content.startsWith(`${prefix}emoji`)) {
        message.react('😉');
        message.react('😎'); 
        message.react('🥞');
    } else if (message.content.startsWith(`${prefix}everyone`)) {
        message.channel.send('@everyone @here')
    } else if (message.content.startsWith(`${prefix}wyr`)) {
      message.react('🅰')
      message.react('🅱')
    } else if (message.content.startsWith(`${prefix}beep boop buup`)) {
        message.channel.send(`i'm a robot`)
    } else if (message.content.startsWith(`${prefix}ghost`)) {
        message.channel.send('`is you`')
    } else if (message.content.startsWith(`${prefix}bored`)) {
        message.channel.send(`me too... me too...`)
    } else if (message.content.startsWith(`${prefix}buup beep boop`)) {
        message.channel.send(`i'm a robot`)
    } else if (message.content.startsWith(`${prefix}boop buup beep`)) {
        message.channel.send(`i'm a robot`)
    } else if (message.content.startsWith(`${prefix}credits`)) {
        message.channel.send('Bot creator: <@773091791192719370>')
    } else if (message.content.startsWith(`${prefix}pin`)) {
        message.channel.send('no')
    } else if (message.content.startsWith(`${prefix}hello`)) {
        message.channel.send(`**Honk** <@${message.author.id}> Hello`)
    } else if (message.content.startsWith(`${prefix}bal DoritoEatingGoose`)) {
        message.channel.send(`DoritoEatingGoose's balance is : **11.010**`)
    } else if (message.content.startsWith(`${prefix}bal killer`)) {''
        message.channel.send(`Killer's balance is: **999,999,999,999,99**`)
    } else if (message.content.startsWith(`${prefix}bal Goose`)) {
        message.channel.send(`Goose's balance is: **7001**`)
    } else if (message.content.startsWith(`${prefix}shamk`)) {
        message.channel.send('ready to put that knife in my chest innit bruv?')
    } else if (message.content.startsWith(`${prefix}bal borger`)) {
        message.channel.send(`Borgers balance is **10001**`)
    } else if (message.content.startsWith(`${prefix}support`)) {
        message.channel.send('The support sever is: https://discord.gg/CG6zJbrZkb')
    } else if (message.content.startsWith(`${prefix}nothing`)) {
        message.channel.send('.')
    } else if (message.content.startsWith(`${prefix}meme time`)) {
        message.channel.send(`***it's meme time it's meme time***`);
        message.channel.send(`**gader all your friends, it's meme time**`);
        message.channel.send(`***it's meme time it's meme time***`);
        message.channel.send(`**the only cure for sadness**`);
    } else if (message.content.startsWith(`${prefix}clear console.log`)) {
        console.log(' ')
        console.log('.')
        console.log(' ')
        console.log('.')
        console.log(' ')
        console.log('.')
        console.log(' ')
        console.log('.')
        console.log(' ')
        console.log('.')
        console.log(' ')
        console.log('.')
        console.log(' ')
        console.log('.')
        console.log(' ')
        console.log('.')
        console.log(' ')
        console.log('.')
        console.log(' ')
        console.log('.')
        console.log(' ')
        console.log('.')
        console.log(' ')
        console.log('.')
        console.log(' ')
        console.log('.')
        console.log(' ')
        console.log('.')
        console.log(' ')
        console.log('.')
        console.log(' ')
        console.log('.')
        console.log(' ')
        console.log('.')
        console.log(' ')
        console.log('.')
        message.channel.send('cleared')
    } else if (message.content.startsWith(`${prefix}nsfw`)) {
        console.log(`8=======D`)
        message.channel.send('you sent the dev a dick')
    } else if (message.content.startsWith(`${prefix}give me a role`)) {
        message.channel.send('the developer is working on this command')
    } else if (message.content.startsWith(`${prefix}bal borger`)) {
        message.channel.send('Borger balance is: **0**')
    } else if (message.content.includes('Hello')) {
        message.channel.send(`Hello @<${message.author.id}>!`)
    } else if (message.content.startsWith(`${prefix}bal borger`)) {
        message.channel.send(`Borger's balanse is: **0**`)
    } else if (message.content.startsWith(`${prefix}poll`)) {
        message.react('👍')
        message.react('👎')
    } else if (message.content.startsWith(`${prefix}bal non goose`)) {
        message.channel.send(`Borgers balance is: **1000**`)
    } else if (message.content.startsWith(`${prefix}bal peace`)) {
        message.channel.send(`Peace's balance is **5000**`)
    } else if (message.content.startsWith(`${prefix}yes`)) {
        message.channel.send('n0')
        message.author.send("no u")
    } else if (message.content.startsWith(`${prefix}bal `)) {
        message.channel.send(`You didn't specify what acount you want to see`)
    } else if (message.content.startsWith(`${prefix}invite`)) {
        message.channel.send(`Here's the invite: https://discord.com/api/oauth2/authorize?client_id=816959525885968384&permissions=8&scope=bot`)
    }
});
//this discord bot was created for server called Honk Clan if you copy this bot's code you will be in deep truble!!! 
//login
client.login(token);