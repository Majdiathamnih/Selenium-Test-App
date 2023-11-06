"use server";
import { NextResponse } from "next/server";
import { Builder, Browser, By, Key, until } from "selenium-webdriver";
export const GET = async (req: Request, res: Response) => {
    // let driver = await new Builder().forBrowser(Browser.CHROME).build();
    try {
        return NextResponse.json({ result: "true" }, { status: 200 });
        // await driver.get("https://www.google.com");
        // await driver.findElement(By.name("q")).sendKeys("testing", Key.RETURN);
        // if (await driver.wait(until.titleIs("Test Definition & Meaning"), 1000)) {
        //     return NextResponse.json({ result: "true" }, { status: 200 });
        // } else {
        //     return NextResponse.json({ result: "false" }, { status: 200 });
        // }
    } catch (err) {
        return NextResponse.json({ message: "Error", err }, { status: 500 })
    }
    finally {
        //await driver.quit();
    }
};