#!/bin/bash

trap ctrl_c INT

function ctrl_c() {
  # shellcheck disable=SC2164
  cd ../scripts
  sh stop.sh
}

pm2 --name React start pnpm -- dev
cd api && php -S 127.0.0.1:5500