'use strict';

const core = require('@actions/core');
const child_process = require('child_process');

const installPythonDependencies = () => {
  core.info('Installing Python dependencies...');
  child_process.execSync(
    'sudo apt-get update && sudo apt-get install -y python3.9 python3-pip gcc build-essential libkrb5-dev python3-setuptools'
  );
};

const installRequiredPipPackages = () => {
  core.info("Installing required PiP modules...");
  child_process.execSync('pip install wheel', {stdio: 'inherit'});
  child_process.execSync('pip install odcs', {stdio: 'inherit'});
  child_process.execSync('pip install docker', {stdio: 'inherit'});
  child_process.execSync('pip install docker_squash', {stdio: 'inherit'});
  child_process.execSync('pip install behave', {stdio: 'inherit'});
  child_process.execSync('pip install lxml', {stdio: 'inherit'});
};

const install = inputs => {
  installPythonDependencies();
  installRequiredPipPackages();
  core.info('Installing CEKit...');
  let cekitInstallCommand = 'pip install --user -U cekit';
  if (inputs.version) {
    cekitInstallCommand = `pip install --user cekit==${inputs.version}`;
  }
  child_process.execSync(cekitInstallCommand, {stdio: 'inherit'});
  core.addPath('/home/runner/.local/bin');
  const cekitVersion = child_process
    .execSync(`cekit --version`)
    .toString()
    .replace(/[\n\r]/g, '');
  console.log(`CEKit ${cekitVersion} installed successfully`);
};

module.exports = install;
