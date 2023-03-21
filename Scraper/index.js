import scrapeCalendar from "./Utils/scrapeCalendar.js";
import sendDiscordMessage from "./Utils/sendDiscordMessage.js";
import nextInterval from "./Utils/nextInterval.js";

async function scrape() {
    await scrapeCalendar("https://finviz.com/calendar.ashx");
    await sendDiscordMessage(); 
}

while (true) {
    setTimeout(async () => {
        await scrape();
    }, nextInterval());
}