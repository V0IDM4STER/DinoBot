const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js")

module.exports = {
    name: "gameselector",
    category: "test",
    devOnly: true,
    run: async ({client, message, args}) => {
        message.channel.send({
            embeds: [
                new MessageEmbed().setTitle("Select Role").setDescription("Select roles from the buttons below:").setColor("BLUE")
            ],
            components: [
                new MessageActionRow().addComponents([
                    new MessageButton().setCustomId("role-997307674687451206").setStyle("PRIMARY").setLabel("League of Legends"),
                    new MessageButton().setCustomId("role-997308684260622416").setStyle("PRIMARY").setLabel("Valorant"),
                    new MessageButton().setCustomId("role-997308759355424799").setStyle("PRIMARY").setLabel("Roblox"),
                    new MessageButton().setCustomId("role-997308817433968700").setStyle("PRIMARY").setLabel("Teamfight Tactics")
                ])
            ]
        })
    }
}