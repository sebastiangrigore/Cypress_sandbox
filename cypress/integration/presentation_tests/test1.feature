Feature: Feature name

    Feature Description

    Scenario: Visit google

        Given I visit "www.wikipedia.com"
        When I search for "test automation"
        Then I verify the title contains "Test automation"
