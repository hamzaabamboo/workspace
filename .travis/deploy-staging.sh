#!/bin/bash
set -e
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" $REGISTRY_URL --password-stdin

docker tag $REGISTRY_URL/workspace/nginx $REGISTRY_URL/workspace/nginx:staging
docker tag $REGISTRY_URL/workspace/backend $REGISTRY_URL/workspace/backend:staging
docker tag $REGISTRY_URL/workspace/client $REGISTRY_URL/workspace/client:staging

docker push $REGISTRY_URL/workspace/nginx
docker push $REGISTRY_URL/workspace/backend
docker push $REGISTRY_URL/workspace/client

echo "ssh to server"
ssh deploy@$HOST "cd workspace/staging && git pull origin staging && ./scripts/deploy-staging.sh"
