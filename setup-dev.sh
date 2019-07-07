#!/bin/bash
./dev.sh up -d postgres-db prisma
./dev.sh up -d backend

sleep 10

./dev.sh exec backend yarn prisma-deploy
./dev.sh up