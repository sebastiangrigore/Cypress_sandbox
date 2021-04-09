Feature: Wikipedia

    Scenario: Visit wikipedia

        Given I visit "www.wikipedia.com"
        When I search for "test automation"
        Then I generate a conflict "sdfdsfgsgdfgfdg"
