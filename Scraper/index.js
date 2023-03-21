import scrapeCalendar from "./Utils/scrapeCalendar.js";
import sendDiscordMessage from "./Utils/sendDiscordMessage.js";

await scrapeCalendar("https://finviz.com/calendar.ashx");
await sendDiscordMessage(); 