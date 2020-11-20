/* eslint-disable linebreak-style */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-var */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable space-before-function-paren */
/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable func-names */
/* eslint-disable linebreak-style */
/* sum.js */

module.exports = function() {

    // Convert arguments object to an array
    // eslint-disable-next-line prefer-rest-params
    var args = Array.prototype.slice.call(arguments);

    // Throw error if arguments contain non-finite number values
    if (!args.every(Number.isFinite)) {
        throw new TypeError('sum() expects only numbers.');
    }

    // Return the sum of the arguments
    return args.reduce(function(a, b) {
        return a + b;
    }, 0);

    // eslint-disable-next-line eol-last
};