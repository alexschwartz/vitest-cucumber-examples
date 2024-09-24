import { loadFeature, describeFeature } from '@amiceli/vitest-cucumber'

const feature = await loadFeature('features/example1.feature')

describeFeature(feature, ({ Scenario }) => {
    Scenario('invoke algorithm', ({ Given, When, Then, And }) => {
        Given(`the keyword {string}`, (keyword:string) => {})
        And('I have a feature like "example.feature"', () => {})
        When('I run vitest-cucumber', () => {})
        Then('My feature file is parsed', () => {})
        And('I can test my scenarios', () => {})
    })
})
