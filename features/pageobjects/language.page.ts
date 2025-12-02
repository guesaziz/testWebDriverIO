import { $ } from '@wdio/globals'

import BasePage from './Base.page';


class LanguagePage extends BasePage {
  async selectLanguage(lang: string) {
    const selector = $(`-android uiautomator:new UiSelector().text("${lang}")`);
    await this.scrollUntilVisible(selector);
    await selector.click();
  }
}

export default new LanguagePage();
