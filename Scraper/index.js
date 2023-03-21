import puppeteer from "puppeteer";

const screenshotOptions = {
    path: "/images/"
}

async function scrapeCalendar(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x("/html/body/div[2]/div/div");
    await el.screenshot(screenshotOptions);

    await browser.close();
}