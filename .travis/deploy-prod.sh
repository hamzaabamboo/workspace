#!/bin/bash
set -e

echo "ssh to server"
ssh deploy@$HOST "cd production && git pull origin master && ./deploy-prod.sh"
