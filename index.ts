import { clickElement, delay, fillInputElement } from "./base";
import { Builder, By, } from 'selenium-webdriver';

(async function main() {
  // Set up the WebDriver
  let driver = await new Builder().forBrowser('chrome').build();

  try {

    const baseUrl = 'http://192.168.20.68:3000'
    // Navigate to the specified URL
    await driver.get(`${baseUrl}/location/65ae26b25029dd43b0be74bc/step-1`);


    // click preview image 
    const previewImage = '/html/body/div[1]/div[2]/div/div/div/div[1]/div/div[3]/div/div[3]/div/img'
    await clickElement({
      driver,
      by: By.xpath(previewImage)
    })

    // select media
    const selectMediaImageButton = '/html/body/div[2]/div/div[2]/div/div[3]/button'
    await clickElement({
      driver,
      by: By.xpath(selectMediaImageButton)
    })

    // move to step 2
    // fill phone
    const phoneInput = '/html/body/div[1]/div[2]/div/div/div/div[1]/div/div[3]/div[1]/div/div/div/div[4]/input'
    await fillInputElement({ driver, by: By.xpath(phoneInput), value: '03749925' })
    // fill email
    const emailInput = '/html/body/div[1]/div[2]/div/div/div/div[1]/div/div[3]/div[3]/div/div/div/div[4]/input'
    await fillInputElement({ driver, by: By.xpath(emailInput), value: 'ducxnl@tokyotechlab.com' })

    // click next
    const nextButton = '/html/body/div[1]/div[2]/div/div/div/div[1]/div/div[4]/button'
    await clickElement({
      driver,
      by: By.xpath(nextButton)
    })

    // Step 3
    // click payment
    const paymentButton = '/html/body/div[1]/div[2]/div/div/div/div[1]/div[2]/button'
    await clickElement({
      driver,
      by: By.xpath(paymentButton)
    })

    // Step 4
    // click payment method
    const paymentMethodButton = '/html/body/div[1]/div[2]/div/div/div/div[1]/div/div[3]/button[1]'
    await clickElement({
      driver,
      by: By.xpath(paymentMethodButton)
    })

    // VNPay
    // choose bank
    const bankData = {
      bankName: 'NCB',
      bankNumber: '9704198526191432198',
      name: 'NGUYEN VAN A',
      date: '07/15',
      otp: '123456'
    }
    await clickElement({
      driver,
      by: By.id(bankData.bankName)
    })

    await delay(2000)
    const bankNumberInput = '/html/body/div[2]/div[2]/div/div/div[2]/div/div/div/div[3]/div/div[2]/form/div/div[2]/div/div/div[1]/div/div[1]/label/input[1]'
    await fillInputElement({ driver, by: By.xpath(bankNumberInput), value: bankData.bankNumber })
    const bankNameInput = '/html/body/div[2]/div[2]/div/div/div[2]/div/div/div/div[3]/div/div[2]/form/div/div[2]/div/div/div[2]/div/div[1]/label/input'
    await fillInputElement({ driver, by: By.xpath(bankNameInput), value: bankData.name })
    const dateInput = '/html/body/div[2]/div[2]/div/div/div[2]/div/div/div/div[3]/div/div[2]/form/div/div[2]/div/div/div[3]/div/div[1]/label/input'
    await fillInputElement({ driver, by: By.xpath(dateInput), value: bankData.date })

    const bankButton = '/html/body/div[2]/div[2]/div/div/div[2]/div/div/div/div[3]/div/div[2]/form/div/div[3]/div[2]/div[2]/a'
    await clickElement({ driver, by: By.xpath(bankButton) })

    const confirmButton = '/html/body/div[8]/div/div/div[3]/div/div[2]/a'
    await clickElement({ driver, by: By.xpath(confirmButton) })

    const otpInput = '/html/body/div[2]/div[2]/div/div/div[2]/div/div/div/div[3]/div/div[2]/form/div/div[1]/div/div[1]/div/div[1]/label/input'
    await fillInputElement({ driver, by: By.xpath(otpInput), value: bankData.otp })

    const VNpaymentButton = '/html/body/div[2]/div[2]/div/div/div[2]/div/div/div/div[3]/div/div[2]/form/div/div[3]/div/div[2]/button'
    await clickElement({ driver, by: By.xpath(VNpaymentButton) })


    await delay(1000)

    driver.executeScript(`const url = window.location.href.replace(window.location.origin,""); window.location.replace("http://192.168.20.68:3000"+url);`);

  } finally {
    // Close the WebDriver
    // await driver.quit();
  }
})();