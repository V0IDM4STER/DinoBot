module.exports = {
    name: "roar",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        message.reply("Rawrrr!")
    }
}