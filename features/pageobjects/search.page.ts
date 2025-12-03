import { $ } from '@wdio/globals'

import BasePage from './Base.page';


class SearchPage extends BasePage {
    /**
     * define selectors using getter methods
     */
    get searchBtn() { 
        return $('accessibility id:Search Wikipedia'); 
        
    }
    get input() { 
        return $('id:org.wikipedia.alpha:id/search_src_text'); 
    }
    
    async openSearch() {
    await this.searchBtn.click();
  }

  async typeQuery(text: string) {
    await this.input.addValue(text);
  }

  async scrollToResult(text: string) {
    const result = $(`-android uiautomator:new UiSelector().text("${text}")`);
    await this.scrollUntilVisible(result);
    await result.click();
  }
}

export default new SearchPage();