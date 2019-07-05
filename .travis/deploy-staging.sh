#!/bin/bash
set -e

echo "ssh to server"
ssh deploy@$HOST "cd staging && git pull origin staging && ./deploy-staging.sh"
