'use strict';

/**
 * Configure path
 */
const path = require('path');
global.PHP_SOURCE = path.resolve(__dirname + '/../source');
global.PHP_FIXTURES = path.resolve(__dirname + '/__fixtures__');
global.PHP_TEST = __dirname;


/**
 * Configure chai
 */
const chai = require('chai');
chai.config.includeStack = true;
global.expect = chai.expect;

const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const chaiSubset = require('chai-subset');
chai.use(chaiSubset);

const chaiString = require('chai-string');
chai.use(chaiString);

const chaiThings = require('chai-things');
chai.use(chaiThings);
