#/bin/bash

env
whoami
pwd
ls -la
ls -la /usr/local/src/inbox

version=$(ls $NVM_DIR/versions/node)
export PATH=$NVM_DIR/versions/node/$version/bin:$PATH;

cd /home/dev/node;

npm install
npm test
