#!/bin/bash
set -e

echo "ssh to server"
ssh deploy@$HOST "cd workspace/production && git pull origin master && ./scripts/deploy-prod.sh"
