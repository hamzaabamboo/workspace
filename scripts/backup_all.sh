CURRENT_DIR=$(pwd)
TIME=$(date +"%y%m%d%H%M")

cd staging
./docker_volume_backup.sh ./staging.sh staging $CURRENT_DIR/backup/$TIME
cd ../production
./docker_volume_backup.sh ./prod.sh production $CURRENT_DIR/backup/$TIME
cd ..