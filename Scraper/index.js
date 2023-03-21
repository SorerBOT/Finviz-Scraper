import puppeteer from "puppeteer";
import getLastSunday from "./Utils/getLastSunday.js"; 

const screenshotOptions = {
    path: `./images/${getLastSunday(new Date())}.png`,
    type: "png",
}
async function scrapeCalendar(url) {
    const browser = await puppeteer.launch({
        executablePath: "/usr/bin/chromium"
    });
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 5.1; rv:5.0) Gecko/20100101 Firefox/5.0')
    await page.goto(url);

    const [el] = await page.$x("/html/body/div[2]/div/div");
    await el.screenshot(screenshotOptions);

    await browser.close();
}

scrapeCalendar("https://finviz.com/calendar.ashx");