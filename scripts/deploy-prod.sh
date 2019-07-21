docker-compose -f docker-compose.yml -f docker-compose.prod.yml build
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --no-deps -d --build
docker-compose -f docker-compose.yml -f docker-compose.prod.yml exec -T backend yarn prisma-deploy
docker-compose -f docker-compose.yml -f docker-compose.prod.yml restart nginx