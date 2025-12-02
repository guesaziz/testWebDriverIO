import { Given, When, Then } from '@wdio/cucumber-framework';
import allureReporter from '@wdio/allure-reporter'
import { expect, $ } from '@wdio/globals'

import OnboardingPage from '../pageobjects/onboarding.page';
import searchPage from '../pageobjects/search.page';
import articlePage from '../pageobjects/article.page';
import languagePage from '../pageobjects/language.page';

// import articleLydia  
// import LoginPage from '../pageobjects/login.page';
// import SecurePage from '../pageobjects/secure.page';
// import onboardingPage from '../pageobjects/Onboarding.page';

// import SearchPage from "../pages/SearchPage";
// import ArticlePage from "../pages/ArticlePage";
// import LanguagePage from "../pages/LanguagePage";
// import FooterPage from "../pages/FooterPage";

// const onboarding = new OnboardingPage();
// const search = new SearchPage();
// const article = new ArticlePage();
// const language = new LanguagePage();
// const footer = new FooterPage();

/**
 * -------------------------
 * GIVEN
 * -------------------------
 */

Given("Je lance l'application depuis le fichier APK", async () => {
  await driver.pause(1500);

});

Given('I include feature and story name', () => {
  allureReporter.addFeature('Feature_name');
  allureReporter.addStory('Story_name');
  allureReporter.addSuite('Suite_name')
})

/**
 * -------------------------
 * WHEN
 * -------------------------
 */

When("Je Continue de défiler le carousel vers la dernière image",
  async () => {
    await OnboardingPage.swipeUntilLast();
  }
);


When('Je saisis {string} dans la barre de recherche', async (s: string) => {
  await searchPage.openSearch();
  await searchPage.typeQuery(s);
})

When('Je fais défiler la liste pour trouver la ville Lydia {string}', async (s: string) => {
    await searchPage.scrollToResult(s);
})

When('Je ferme la popup si elle apparaît', async () => {
 await articlePage.dismissPopupIfPresent();
})

When('Je clique sur le bouton de changement de langue', async () => {
    await articlePage.openLanguageMenu();
})

When('Je sélectionne {string} dans la liste des langues', async (s: string) => {
    await languagePage.selectLanguage(s);
})


When('Je fais défiler la page jusqu en bas', async () => {
   await articlePage.scrollToBottom()
})

When('Je clique sur le lien ou le bouton {string}', async (s: string) => {
  await articlePage.openLink(s)
})


When('Je confirme la redirection la page {string}', async (s: string) => {
   await articlePage.confirmRedirect();
})

/**
 * -------------------------
 * THEN
 * -------------------------
 */

Then('Je devrais confirmer la derniere image', async () => {
  await OnboardingPage.finish();
})

Then('Article devrait être intitulé ville {string}', async (s: string) => {
    await articlePage.verifyArticleTitle(s);
})

Then('Je devrais voir le pied de page', async () => {
   await articlePage.WaitReadMore();
})
