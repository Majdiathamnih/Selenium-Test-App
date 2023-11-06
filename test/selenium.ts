"use server";
import { Builder, Browser, By, Key, until } from "selenium-webdriver";
export const seleniumTest = async () => {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get("https://www.google.com");
    await driver.findElement(By.name("q")).sendKeys("testing", Key.RETURN);
    if (await driver.wait(until.titleIs("Test Definition & Meaning"), 1000)) {
      return 'true';
    } else {
      return 'false'
    }
  } finally {
    await driver.quit();
  }
};
