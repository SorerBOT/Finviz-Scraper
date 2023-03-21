import scrapeCalendar from "./Utils/scrapeCalendar.js";
import sendDiscordMessage from "./Utils/sendDiscordMessage.js";
import nextInterval from "./Utils/nextInterval.js";
import express from "express";

const app = express();

async function scrape() {
    await scrapeCalendar("https://finviz.com/calendar.ashx");
    await sendDiscordMessage(); 
}
app.listen(8080, async () => {
    console.log("App Running");

    while (true) {
        setTimeout(async () => {
            await scrape();
        }, nextInterval());
    }

});

