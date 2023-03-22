import scrapeCalendar from "./Utils/scrapeCalendar.js";
import sendDiscordMessage from "./Utils/sendDiscordMessage.js";
import nextInterval from "./Utils/nextInterval.js";
import msToTime from "./Utils/msToTime.js";
import cron from "node-cron";
import express from "express";

const app = express();

async function scrape() {
    await scrapeCalendar("https://finviz.com/calendar.ashx");
    await sendDiscordMessage(); 
}

app.get("/", (req, res) => {
    res.send(`The Scraper is next to run in ${msToTime(nextInterval())}`)
});

app.listen(8080, "0.0.0.0", async () => {
    console.log("App Running");
    cron.schedule("* * * * * Sunday", async () => {
        await scrape();
    });
});