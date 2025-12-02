import { $ } from '@wdio/globals'

import BasePage from './Base.page';


/**
 * sub page containing specific selectors and methods for a specific page
 */
class OnboardingPage extends BasePage {
    /**
     * define selectors using getter methods
     */
    get btnNext() {
    return $('id:org.wikipedia.alpha:id/fragment_onboarding_forward_button');
    }
    get btnDone() {
        return $('id:org.wikipedia.alpha:id/fragment_onboarding_done_button');
    }
    public get flashAlert () {
        return $('#flash');
    }
    async waitForFirstScreen() {
    await this.waitForDisplayed(this.btnNext);
   }
   async swipeUntilLast() {
        for (let i = 0; i < 5; i++) {
        if (await this.btnDone.isDisplayed()) return;
        await this.btnNext.click();
        await driver.pause(200);
        }
    }

    async finish() {
        if (await this.btnDone.isDisplayed().catch(() => false)) {
            await this.btnDone.click();
        }
    }
}

export default new OnboardingPage();