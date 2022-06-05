Feature: Presentation Tests

    Scenario: Visit wikipedia
        Given I visit "www.wikipedia.com"
        When I search for "test automation"

    Scenario: Visit Google
        Given I visit "https://www.google.com/"
         When I click on "#L2AGLb > .QS5gu"
        Then I click I feel lucky

    Scenario: DemoQA site
        Given I visit "https://demoqa.com/"
        When I click on ":nth-child(1) > :nth-child(1) > .avatar > svg > path"
        Then I click on "//*[@class='text']"

    Scenario: NewScenario
       Given I visit ""

    # Scenario: 4
