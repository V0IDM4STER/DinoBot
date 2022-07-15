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
                    new MessageButton().setCustomId("role-").setStyle("PRIMARY").setLabel("PC"),
                    new MessageButton().setCustomId("role-").setStyle("PRIMARY").setLabel("Laptop"),
                    new MessageButton().setCustomId("role-").setStyle("PRIMARY").setLabel("Xbox"),
                    new MessageButton().setCustomId("role-").setStyle("PRIMARY").setLabel("Playstation"),
                    new MessageButton().setCustomId("role-").setStyle("PRIMARY").setLabel("Nintendo"),
                ])
            ]
        })
    }
}