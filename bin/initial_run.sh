#!/bin/bash
echo "Make sure to install node modules first!"
NODE_ENV=production pm2 start server/babel-wrapper.js --node-args="--harmony" -f --name "admirable"
