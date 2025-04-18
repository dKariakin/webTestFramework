# webTestFramework

A simple web test automation framework demonstration that introduces an overall project structure and a couple of tests.
The most interesting part is an example of how page objects can be initiated in fixture, therefore improving test framework maintainability and increasing the speed you write new tests with.

To run tests just use:

```bash
npx playwright test
```

## Src

Contains source code of the test framework (mainly page objects describing actual pages that user can interact with in the test object). 

## Tests

Contains the tests themselves (as well as the test fixture).
As you can see, no page object entities are created in specific tests. Instead they're created in the fixture as an extension to base Playwright test type (and initialized along the Page instance at the beginning of the test).
This allows to re-use them therefore lowering cognitive load per test.

## Test object

In this example a simple generated authentication form will be used to run tests against.