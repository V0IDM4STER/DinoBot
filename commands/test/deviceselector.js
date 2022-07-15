const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js")

module.exports = {
    name: "deviceselector",
    category: "test",
    devOnly: true,
    run: async ({client, message, args}) => {
        message.channel.send({
            embeds: [
                new MessageEmbed().setTitle("Select Role").setDescription("Select roles from the buttons below:").setColor("BLUE")
            ],
            components: [
                new MessageActionRow().addComponents([
                    new MessageButton().setCustomId("role-997313636164968478").setStyle("PRIMARY").setLabel("PC"),
                    new MessageButton().setCustomId("role-997313692104409148").setStyle("PRIMARY").setLabel("Laptop"),
                    new MessageButton().setCustomId("role-997313719929417849").setStyle("PRIMARY").setLabel("Xbox"),
                    new MessageButton().setCustomId("role-997313794315391026").setStyle("PRIMARY").setLabel("Playstation"),
                    new MessageButton().setCustomId("role-997313751126659152").setStyle("PRIMARY").setLabel("Nintendo"),
                ])
            ]
        })
    }
}