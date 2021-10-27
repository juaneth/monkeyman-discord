const Discord = require('discord.js')

module.exports = {
    name: "ping",
    description: "Sends the bots ping",
    execute(message) {
        message.channel.send('Loading data').then(async (msg) => {
            msg.delete()
            const Pingembed = new Discord.MessageEmbed()
                .setColor("#964B00")
                .setTitle("My Ping!")
                .setDescription(`My ping is ${msg.createdTimestamp - message.createdTimestamp}ms.`)
                .setThumbnail(`https://c.tenor.com/oVFB1xXQ4FkAAAAi/monke-gorilla.gif`)
            message.channel.send(Pingembed)
        })
    }
}