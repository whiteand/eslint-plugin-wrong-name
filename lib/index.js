/**
 * @fileoverview disallows using of names that match the pattern
 * @author Andrew
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
const wrongNameRule = require('./rules/wrong-name')

// import all rules in lib/rules
module.exports.rules = {
    'wrong-name': wrongNameRule
}
