import puppeteer from "puppeteer";
import getLastSunday from "./Utils/getLastSunday.js"; 

const screenshotOptions = {
    path: `./images/${getLastSunday(new Date())}.png`,
    type: "png"
}

async function scrapeCalendar(url) {
    const browser = await puppeteer.launch({
        executablePath: "/usr/bin/chromium"
    });
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x("/html/body/div[2]/div/div");
    await el.screenshot(screenshotOptions);

    await browser.close();
}

scrapeCalendar("https://finviz.com/calendar.ashx");