#!/bin/bash
set -e

docker push $REGISTRY_URL/workspace/nginx
docker push $REGISTRY_URL/workspace/backend
docker push $REGISTRY_URL/workspace/client

echo "ssh to server"
# ssh deploy@$HOST "cd workspace/production && git pull origin master && ./scripts/deploy-prod.sh"
