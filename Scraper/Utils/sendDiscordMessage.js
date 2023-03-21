import { EmbedBuilder, WebhookClient } from "discord.js";
import getLastSunday from "./getLastSunday.js";
import dotenv from "dotenv";
dotenv.config();

const { WEBHOOK_ID, WEBHOOK_TOKEN } = process.env;
const webhookClient = new WebhookClient({ id: WEBHOOK_ID, token: WEBHOOK_TOKEN });

const embed = new EmbedBuilder()
    .setTitle(`Weekly News ${getLastSunday()}`)
    .setURL("https://finviz.com/calendar.ashx") 
    .setColor(0x50BF9A)
    .setFooter({ text: "Powered By Sorer#0341", iconURL: "https://avatars.githubusercontent.com/u/72152919?v=4" })
    .setAuthor({ name: "Trading News", url: "https://avatars.githubusercontent.com/u/72152919?v=4", iconURL: "https://i.imgur.com/QebkOyn.jpeg" });

await webhookClient.send({
    content: "",
    embeds: [embed],
    files: [
        {
            attachment: "./images/2023-03-19.png"
        }
    ]
});