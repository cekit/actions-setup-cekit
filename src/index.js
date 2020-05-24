#!/usr/bin/env node
'use strict';

const errorHandler = require('./error-handler');
const checkEnvironment = require('./check-environment');
const loadInputs = require('./load-inputs');
const install = require('./install');

const run = () => {
  checkEnvironment();
  const inputs = loadInputs();
  install(inputs);
};

process.on('unhandledRejection', errorHandler);
run();
