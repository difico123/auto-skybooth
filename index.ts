import { clickElementWithId, clickElementWithXpath, fillInputElementWithXpath } from "./base";

const { Builder, } = require('selenium-webdriver');


(async function main() {
  // Set up the WebDriver
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navigate to the specified URL
    await driver.get('http://192.168.20.68:3000/location/65ae26b25029dd43b0be74bc/step-1');


    // click preview image 
    const previewImage = '//*[@id="app"]/div[2]/div/div/div/div[1]/div/div[3]/div/div[1]/div/img'
    await clickElementWithXpath({
      driver,
      xpath: previewImage
    })

    // select media
    const selectMediaImageButton = '/html/body/div[2]/div/div[2]/div/div[3]/button'
    await clickElementWithXpath({
      driver,
      xpath: selectMediaImageButton
    })

    // move to step 2
    // fill name
    const nameInput = '/html/body/div[1]/div[2]/div/div/div/div[1]/div/div[3]/div[1]/div[1]/div/div/div[4]/input'
    await fillInputElementWithXpath({ driver, xpath: nameInput, value: 'duc' })

    // fill phone
    const phoneInput = '/html/body/div[1]/div[2]/div/div/div/div[1]/div/div[3]/div[2]/div/div/div/div[4]/input'
    await fillInputElementWithXpath({ driver, xpath: phoneInput, value: '0374993925' })

    // click next
    const nextButton = '/html/body/div[1]/div[2]/div/div/div/div[1]/div/div[4]/button'
    await clickElementWithXpath({
      driver,
      xpath: nextButton
    })

    // Step 3
    // click payment
    const paymentButton = '/html/body/div[1]/div[2]/div/div/div/div[1]/div[2]/button'
    await clickElementWithXpath({
      driver,
      xpath: paymentButton
    })

    // Step 4
    // click payment method
    const paymentMethodButton = '/html/body/div[1]/div[2]/div/div/div/div[1]/div/div[3]/button[1]'
    await clickElementWithXpath({
      driver,
      xpath: paymentMethodButton
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
    await clickElementWithId({
      driver,
      id: bankData.bankName
    })
    const bankNumberInput = '/html/body/div[2]/div[2]/div/div/div[2]/div/div/div/div[3]/div/div[2]/form/div/div[2]/div/div/div[1]/div/div[1]/label/input[1]'
    await fillInputElementWithXpath({ driver, xpath: bankNumberInput, value: bankData.bankNumber })
    const bankNameInput = '/html/body/div[2]/div[2]/div/div/div[2]/div/div/div/div[3]/div/div[2]/form/div/div[2]/div/div/div[2]/div/div[1]/label/input'
    await fillInputElementWithXpath({ driver, xpath: bankNameInput, value: bankData.name })
    const dateInput = '/html/body/div[2]/div[2]/div/div/div[2]/div/div/div/div[3]/div/div[2]/form/div/div[2]/div/div/div[3]/div/div[1]/label/input'
    await fillInputElementWithXpath({ driver, xpath: dateInput, value: bankData.date })

    const bankButton = '/html/body/div[2]/div[2]/div/div/div[2]/div/div/div/div[3]/div/div[2]/form/div/div[3]/div[2]/div[2]/a'
    await clickElementWithXpath({ driver, xpath: bankButton })

    const confirmButton = '/html/body/div[8]/div/div/div[3]/div/div[2]/a'
    await clickElementWithXpath({ driver, xpath: confirmButton })

    const otpInput = '/html/body/div[2]/div[2]/div/div/div[2]/div/div/div/div[3]/div/div[2]/form/div/div[1]/div/div[1]/div/div[1]/label/input'
    await fillInputElementWithXpath({ driver, xpath: otpInput, value: bankData.otp })

    const VNpaymentButton = '/html/body/div[2]/div[2]/div/div/div[2]/div/div/div/div[3]/div/div[2]/form/div/div[3]/div/div[2]/button'
    await clickElementWithXpath({ driver, xpath: VNpaymentButton })
    // Perform any additional actions or assertions here

  } finally {
    // Close the WebDriver
    // await driver.quit();
  }
})();