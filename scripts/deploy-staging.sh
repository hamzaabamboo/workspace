docker-compose -f docker-compose.yml -f docker-compose.staging.yml build
docker-compose -f docker-compose.yml -f docker-compose.staging.yml up --no-deps -d --build
docker-compose -f docker-compose.yml -f docker-compose.staging.yml exec -T backend yarn prisma-deploy
docker-compose -f docker-compose.yml -f docker-compose.staging.yml restart nginx