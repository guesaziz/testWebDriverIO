@mobile @ui @allure
Feature: Test de l'interface mobile de l'application

  Background:
    Given Je lance l'application depuis le fichier APK
    And I include feature and story name


  @swipe @allure
  Scenario: Parcourir le carousel jusqu'à la dernière image
    When Je Continue de défiler le carousel vers la dernière image
    Then Je devrais confirmer la derniere image  

  @search @allure
  Scenario: Rechercher et sélectionner la ville "Lydia"
    When Je saisis "Lydia" dans la barre de recherche
    And Je fais défiler la liste pour trouver la ville Lydia "Ancient Anatolian kingdom"
    And Je ferme la popup si elle apparaît
    Then Article devrait être intitulé ville "Lydia"

  @language @allure
  Scenario: Changer la langue du site en français
    When Je clique sur le bouton de changement de langue
    And Je sélectionne "Français" dans la liste des langues
    Then Article devrait être intitulé ville "Lydie"

  @scroll @allure
  Scenario: Faire défiler jusqu'en bas de la page
    When Je fais défiler la page jusqu en bas
    Then Je devrais voir le pied de page

  @navigation @allure
  Scenario: Naviguer vers la page "Crésus"
    When Je clique sur le lien ou le bouton "Crésus"
    And Je confirme la redirection la page "Crésus"
    Then Article devrait être intitulé ville "Crésus"
