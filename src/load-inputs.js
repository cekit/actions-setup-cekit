'use strict';

const core = require('@actions/core');

const loadInputs = () => {
  console.log('Loading input variables');
  const result = {};
  result.version = core.getInput('version');
  return result;
};

module.exports = loadInputs;
