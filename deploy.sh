
# scp -r /Users/liumin/Desktop/Dva/Admin.HuarenLife/dist root@45.79.93.51:/root/huaren58
# DATA=$(date +%y%m%d)

# SERVER="root@45.79.93.51"
DIR="/root/huaren58.com"
# LOCAL_DIR="pages/*"

# FILELIST=$(git diff --name-only HEAD~ HEAD)

# for i in ${FILELIST}
# do
# scp -r $(pwd)/${i} ${SERVER}:${DIR}
# done

echo '本地路径：'
# echo $(pwd)/${LOCAL_DIR}
# echo $(pwd)

TEMP=`find $(pwd) \( -path $(pwd)/node_modules -o -path $(pwd)/.next -o -path $(pwd)/.git \) -prune -o -maxdepth 1 -mindepth 1 -name "*" -print`
# TEMP=`find $(pwd) -name "*" -path $(pwd)/node_modules -prune -o -maxdepth 1 -print`
# TEMP=`find $(pwd)/* -path $(pwd)/node_modules -prune -o -maxdepth 0 -print`

# echo ${TEMP}
echo '远程路径：'
echo ${DIR}


echo '开始推送文件到国内服务器'
scp -r ${TEMP} root@123.206.49.55:${DIR}

# echo '开始推送文件到国外服务器'
# scp -r ${TEMP} root@45.79.93.51:${DIR}

echo '传输完毕，cool~~~'
