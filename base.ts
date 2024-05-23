import { By, until } from "selenium-webdriver";

export const fillInputElementWithXpath = async (data: { driver: any, xpath: string, value: string }) => {

    const { driver, xpath, value } = data
    let inputElement = await driver.wait(
        until.elementLocated(By.xpath(xpath)),
        10000
    );
    const result = await inputElement.sendKeys(value);
    return result
}

export const clickElementWithXpath = async (data: { driver: any, xpath: string, }) => {
    const { driver, xpath, } = data

    // Wait until the element is present
    let element = await driver.wait(
        until.elementLocated(By.xpath(xpath)),
        10000
    );

    // Execute JavaScript to click on the element
    const result = await driver.executeScript("arguments[0].click();", element);

    return result
}

export const clickElementWithId = async (data: { driver: any, id: string, }) => {
    const { driver, id, } = data

    // Wait until the element is present
    let element = await driver.wait(
        until.elementLocated(By.id(id)),
        10000
    );

    // Execute JavaScript to click on the element
    const result = await driver.executeScript("arguments[0].click();", element);

    return result
}