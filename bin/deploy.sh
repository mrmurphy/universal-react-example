#!/bin/bash
rsync -rav --exclude=".git" --exclude="node_modules" -e ssh . root@$DEPLOY_HOST:/var/www/admirable
ssh root@$DEPLOY_HOST 'cd /var/www/admirable && npm install && pm2 restart admirable'
