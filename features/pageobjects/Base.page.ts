import { ChainablePromiseElement } from 'webdriverio';

const WAIT_TIME_OUT = 10000;
const NB_MAX_SCROLL = 15;
const ORIGINAL_TIME_OUT = browser.options.cucumberOpts?.timeout || 60000;
const SCROLL_TIME_OUT =  browser.options.connectionRetryTimeout || 120000;

export default class BasePage {

  async waitForDisplayed(el: ChainablePromiseElement, timeout = WAIT_TIME_OUT) {
    await el.waitForDisplayed({ timeout });
  }

  async scrollUntilVisible(el: ChainablePromiseElement, max = NB_MAX_SCROLL) {
    for (let i = 0; i < max; i++) {
      if (await el.isDisplayed().catch(() => false)) return;

      await driver.action('pointer')
        .move({ x: 400, y: 1700 })
        .down({ button: 0 })
        .move({ x: 400, y: 600, duration: 700 })
        .up({ button: 0 })
        .perform();

      await driver.pause(300);
    }
    throw new Error("Element not found after scrolling");
  }

  async scrollUntilElemen(elLocator: string) {
  await browser.setTimeout({ implicit: SCROLL_TIME_OUT });
  const elementScrool= await $(
    `android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(` +
    `new UiSelector().${elLocator});`
  );
  await browser.setTimeout({ implicit: ORIGINAL_TIME_OUT });
  return elementScrool;
}
}
