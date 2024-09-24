import { loadFeature, describeFeature } from '@amiceli/vitest-cucumber'

const feature = await loadFeature('features/example1.feature')

describeFeature(feature, ({ Scenario }) => {
    Scenario('invoke algorithm', ({ Given, When, Then, And }) => {
        Given(`the keyword {string}`, (keyword:string) => {})
        When('the algorithm is invoked with the keyword', () => {})
        Then(`the result is {string}`, (keyword:string) => {})
    })
})
