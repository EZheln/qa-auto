import config from "../config/config.js";
import assert from 'node:assert';
import test from 'node:test';

test ('EXAMPLE_API is registered in config', function () {
    const actualResult = config.get("BASE_URL_API");
    const expectedResult = (config.target === "dev") ? "DEV_EXAMPLE_API" : "QA_EXAMPLE_API";
    assert.equal(actualResult, expectedResult);
});

test ('EXAMPLE_UI is registered in config', function () {
    const actualResult = config.get("BASE_URL_UI");
    const expectedResult = (config.target === "dev") ? "DEV_EXAMPLE_UI" : "QA_EXAMPLE_UI";
    assert.equal(actualResult, expectedResult);
});










// let assert = require('chai').assert;  // list of assert api - https://www.chaijs.com/api/assert/
// const { after, afterEach, before, beforeEach } = require('mocha');
// //let assert = require('assert')
// let actualResult = require('../another_new_file');

// describe('First test block', function (){
//     before(function () {
//         console.log('BEFORE');
//     });
//     after(function () {
//         console.log('AFTER');
//     });
//     beforeEach(function () {
//         console.log('BeforeEach');
//     });
//     afterEach(function () {
//         console.log('AfterEach');
//     });
    
//     it('FIRST TC - actualResult should return Hello World', function () {
//         assert.equal(actualResult(), 'Hello World!!!');
//     });

//     it('SECOND TC - actualResult should return Hello World', function () {
//         assert.equal(1, 1);
//     });

// });

// describe('Second i the same file test block', function (){
//     it('actualResult should return Hello World', function () {
//         assert.equal(1, 1);

//     });
// });



