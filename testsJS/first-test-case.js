// This sample code supports WebdriverIO client >=9.7.0
// (npm i --save webdriverio)
// Then paste this into a .js file and run with Node:
// node <file>.js

// Sample WebdriverIO + Appium code

import { remote } from 'webdriverio';

async function SwipDownUntilElementExiste(driver, selector) {
    let el = await driver.$(selector);

    while (!(await el.isDisplayed())) {
        await driver.action('pointer')
            .move({ duration: 0, x: 437, y: 1934 })
            .down({ button: 0 })
            .move({ duration: 1000, x: 427, y: 667 })
            .up({ button: 0 })
            .perform();

        el = await driver.$(selector);
    }
}

async function main() {

    const caps = {
        platformName: "Android",
        "appium:platformVersion": "11",
        "appium:deviceName": "emulator-5554",
        "appium:app": "D:\\Selenium\\WebDriverIO\\app\\app-alpha-universal-release.apk",
        "appium:automationName": "UiAutomator2",
        "appium:appPackage": "org.wikipedia.alpha",
        "appium:appActivity": "org.wikipedia.main.MainActivity",
        "appium:ensureWebviewsHavePages": true,
        "appium:nativeWebScreenshot": true,
        "appium:newCommandTimeout": 3600,
        "appium:connectHardwareKeyboard": true
    };

    const driver = await remote({
        protocol: "http",
        hostname: "127.0.0.1",
        port: 4723,
        path: "/",
        capabilities: caps
    });

    // --- Carousel ---
    let el1 = await driver.$("id:org.wikipedia.alpha:id/fragment_onboarding_forward_button");
    await el1.click();
    let el2 = await driver.$("id:org.wikipedia.alpha:id/fragment_onboarding_forward_button");
    await el2.click();
    let el3 = await driver.$("id:org.wikipedia.alpha:id/fragment_onboarding_forward_button");
    await el3.click();
    let el4 = await driver.$("id:org.wikipedia.alpha:id/fragment_onboarding_done_button");
    await el4.click();

    // --- Search Lydia ---
    let el5 = await driver.$("accessibility id:Search Wikipedia");
    await el5.click();

    let el6 = await driver.$("id:org.wikipedia.alpha:id/search_src_text");
    await el6.addValue("Lydia");

    // Scroll until the result appears
    await SwipDownUntilElementExiste(
        driver,
        '-android uiautomator:new UiSelector().text("Ancient Anatolian kingdom")'
    );

    let el7 = await driver.$('-android uiautomator:new UiSelector().text("Ancient Anatolian kingdom")');
    await el7.click();

    // Close popup
    el1 = await driver.$("accessibility id:Close");
    await el1.click();

    // Open language settings
    el3 = await driver.$("accessibility id:Language");
    await el3.click();

    // Scroll to French
    await SwipDownUntilElementExiste(
        driver,
        '-android uiautomator:new UiSelector().text("Français")'
    );

    el4 = await driver.$('-android uiautomator:new UiSelector().text("Français")');
    await el4.click();

    // Open Lydie page
    el5 = await driver.$('-android uiautomator:new UiSelector().text("Lydie").instance(0)');

    // Scroll to footer
    await SwipDownUntilElementExiste(
        driver,
        '-android uiautomator:new UiSelector().resourceId("pcs-footer-container-legal")'
    );

    let el = await driver.$('-android uiautomator:new UiSelector().text("Crésus")');
    await el.click();

    const el9 = await driver.$("id:org.wikipedia.alpha:id/link_preview_primary_button");
    await el9.click();

    await driver.deleteSession();
}

main().catch(console.log);
