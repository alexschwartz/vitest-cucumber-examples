Feature: use vitest-cucumber to test an algorithm
    Scenario: invoke algorithm
        Given the keyword "nice"
        When  the algorithm is invoked with the keyword
        Then  the result is "very nice"
