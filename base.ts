import { By, Locator, WebDriver, until } from "selenium-webdriver";

export const fillInputElement = async (data: { driver: WebDriver, by: Locator | By, value: string }) => {

    const { driver, by, value } = data
    let inputElement = await driver.wait(
        until.elementLocated(by),
        10000
    );

    await driver.wait(until.elementIsVisible(inputElement), 10000);
    await driver.wait(until.elementIsEnabled(inputElement), 10000);

    const result = await inputElement.sendKeys(value);
    return result
}

export const clickElement = async (data: { driver: WebDriver, by: Locator | By }) => {
    const { driver, by } = data

    // Wait until the element is present
    let element = await driver.wait(
        until.elementLocated(by),
        10000
    );
    await driver.wait(until.elementIsVisible(element), 10000);
    await driver.wait(until.elementIsEnabled(element), 10000);
    // Execute JavaScript to click on the element
    const result = await driver.executeScript("arguments[0].click();", element);

    return result
}

export const delay = async (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}