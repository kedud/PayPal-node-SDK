/* Copyright 2015-2016 PayPal, Inc. */
"use strict";

var generate = require('../generate');

/**
 * Create or get details of payments
 * @return {Object} Payment functions
 */
function transaction() {
    var baseURL = '/v1/reporting/transactions';
    var operations = ['list'];

    var ret = {
      baseURL: baseURL,
    };
    ret = generate.mixin(ret, operations);
    return ret;
}

module.exports = transaction;
