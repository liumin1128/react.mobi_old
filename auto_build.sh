PRO_DIR="../huaren58.com"
GIT_URL="https://github.com/liumin1128/huaren58.com.git"
pwd

echo "切换到Node 版本：9.3.0"
source ~/.nvm/nvm.sh
nvm use 9.3.0

echo "Node 版本："
node -v

# echo "关闭pm2"
# pm2 delete huaren58.com

echo "进入项目目录"
PATH_OLD=`pwd`
cd $PRO_DIR
PATH_NEW=`pwd`
echo "从 $PATH_OLD 切换到 $PATH_NEW"

echo "正在从git同步代码"
output1=`git fetch --all && git reset --hard origin/master && git pull`
echo $output1

echo "正在安装依赖"
output2=`npm install`
echo $output2

echo "正在编译"
output3=`yarn build`
echo $output3

echo "重启pm2"
# pm2 restart huaren58.com
output4=`yarn pm2`
echo $output4

pm2 ls
echo "项目已更新~"
