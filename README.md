# A few automation test examples using webdriveio.

Requirements:
- Node.js;
- Git Bash;
- WebdriveIO V5 or new one.

For work with tests you have to:
1. Choose place for project;
2. Initialize a new NPM project, run a commands:
- mkdir project-name && cd project-name
- npm init -y
3. Install WebdriverIO CLI, run a command:
- npm i --save-dev @wdio/cli
4. Generate Configuration File, run a command:
- ./node_modules/.bin/wdio config -y
5. Add tests from the test folder in this repository to the test folder in your project;
6. Run test:
- ./node_modules/.bin/wdio wdio.conf.js
