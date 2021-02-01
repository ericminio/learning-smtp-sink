#/bin/bash

rm output.log
ready=0
while [ $ready != 1 ]
do
    echo "waiting for smtp server";
    docker-compose logs > output.log
    ready=`cat output.log | grep trying | wc -l`
    sleep 1;
done;
echo "smtp server is ready";