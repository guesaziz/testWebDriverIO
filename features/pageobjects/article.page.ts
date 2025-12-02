import { $ } from '@wdio/globals'

import BasePage from './Base.page';


class ArticlePage extends BasePage {

    get popupBtn() { return $('id:org.wikipedia.alpha:id/closeButton'); }
    get languageBtn() { return $('accessibility id:Language'); }

    get footer() {
      return $('-android uiautomator:new UiSelector().resourceId("pcs-footer-container-legal")');
    }

    get readMore(){
      return $('-android uiautomator:new UiSelector().resourceId("pcs-footer-container-readmore-heading")')
    }
    get redirectButton(){
      return $('id:org.wikipedia.alpha:id/link_preview_primary_button')
    }

    
    async dismissPopupIfPresent() {
        await this.waitForDisplayed(this.popupBtn)
        if (await this.popupBtn.isDisplayed().catch(() => false)) {
            await this.popupBtn.click();
        }
    }

    async openLanguageMenu() {
        await this.languageBtn.click();
    }

    async verifyArticleTitle( title : string) {
      const titleTxt = $(`-android uiautomator:new UiSelector().text("${title}")`);
      await this.waitForDisplayed(titleTxt);
    }

    async scrollToBottom() {
      const footerEl = 'resourceId("pcs-footer-container-legal")';
      await this.scrollUntilElemen(footerEl);
    }

    async WaitReadMore(){
      await this.readMore.isDisplayed();
    }

    async openLink(text: string) {
      const link = $(`-android uiautomator:new UiSelector().text("${text}")`);
      await link.click();
    }

    async confirmRedirect(){
      await this.redirectButton.click();
    }

}

export default new ArticlePage();

