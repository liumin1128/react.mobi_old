docker ps // 查看所有正在运行容器
docker stop containerId // containerId 是容器的ID

docker ps -a // 查看所有容器
docker ps -a -q // 查看所有容器ID

docker stop $(docker ps -a -q) // stop停止所有容器
docker rm $(docker ps -a -q) // remove删除所有容器

docker run --name nginx -p 8080:80 -d nginx

<!-- 

docker run
--name my_nginx
-d -p 80:80
-v /data/nginx/conf/nginx.conf:/etc/nginx/nginx.conf
-v /data/nginx/log:/var/log/nginx
-v /data/nginx/html:/usr/share/nginx/html
nginx

 -->

docker run -itd --name mongo -p 27017:27017 mongo --auth
<!-- 

docker run -itd --name mongo -p 27017:27017 mongo --auth
docker exec -it mongo mongo admin
创建一个名为 admin，密码为 123456 的用户。
db.createUser({ user:'admin',pwd:'123456',roles:[ { role:'userAdminAnyDatabase', db: 'admin'}]});
尝试使用上面创建的用户信息进行连接。
db.auth('admin', '123456')
创建数据库用户
db.createUser({ user:'react',pwd:'123456',roles:[ { role:'readWrite', db: 'react'}]}) 

-->


docker run -itd --name redis-test -p 6379:6379 redis
# docker exec -it redis-test /bin/bash

docker run -it -v `pwd`:/workspace -w /workspace --privileged=true node:12 yarn
docker run -it -v `pwd`:/workspace -w /workspace -p 8000:8000 --privileged=true node:12 yarn start
