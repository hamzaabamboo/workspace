#!/bin/bash
set -e
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" $REGISTRY_URL --password-stdin

docker push $REGISTRY_URL/workspace/nginx
docker push $REGISTRY_URL/workspace/backend
docker push $REGISTRY_URL/workspace/client

echo "ssh to server"
ssh deploy@$HOST "cd workspace/production && git pull origin master && ./scripts/deploy-prod.sh"
