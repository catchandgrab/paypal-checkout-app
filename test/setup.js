/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable func-names */
/* eslint-disable space-before-function-paren */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
// test/setup.js

// root hook to run before every test (even in other files)
beforeEach(function() {
    doMySetup();
});

// root hook to run after every test (even in other files)
afterEach(function() {
    doMyTeardown();
});