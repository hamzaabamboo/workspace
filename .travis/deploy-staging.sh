#!/bin/bash
set -e

echo "ssh to server"
ssh deploy@$HOST "cd workspace/staging && git pull origin staging && ./scripts/deploy-staging.sh"
