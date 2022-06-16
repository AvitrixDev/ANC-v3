const discord = require("discord.js")
require("dotenv").config()
const  client  = new discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "what are you"){
        message.reply("a bot ding dong. get ur head straight for once.")
    }
})

client.login(process.env.token)