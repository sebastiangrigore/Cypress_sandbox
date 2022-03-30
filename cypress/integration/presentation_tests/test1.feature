Feature: Wikipedia

    Scenario: Visit wikipedia

        Given I visit "www.wikipedia.com"
        When I search for "test automation"

    # Then I wait for the conflict
    # Then I generate a conflict "sdfdsfgsgdfgfdg"

    Scenario: Visit Google
        Given I visit "https://www.google.com/"
         When I click on "#L2AGLb > .QS5gu"
        Then I click I feel lucky

    # Scenario: DemoQA site
    #     Given I visit "https://demoqa.com/"
    #     When I click on ".banner-image"

    # Scenario: 4
