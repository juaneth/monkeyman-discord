const Discord = require('discord.js')

module.exports = {
    name: 'dad',
    description: "Sends your dad!",
    execute(message) {
        message.channel.send('Loading data').then(async(msg) => {
            msg.delete()
            const Pingembed = new Discord.MessageEmbed()
                .setColor("#964B00")
                .setTitle("Dad? ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
                .setDescription(`Where is he?⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`)
                .setThumbnail(`https://upload.wikimedia.org/wikipedia/en/c/c8/Very_Black_screen.jpg`)
            message.channel.send(Pingembed)
        })
    }
}