PRO_DIR="../react.mobi"
GIT_URL="https://github.com/liumin1128/react.mobi.git"
pwd

# echo "切换到Node 版本：8.8.1"
# source ~/.nvm/nvm.sh
# nvm use 8.8.1

# echo "Node 版本："
# node -v

# echo "关闭pm2"
# pm2 delete react.mobi

echo "进入项目目录"
PATH_OLD=`pwd`
cd $PRO_DIR
PATH_NEW=`pwd`
echo "从 $PATH_OLD 切换到 $PATH_NEW"

echo "正在从git同步代码"
output1=`git pull`
echo $output1

echo "正在下载依赖"
output2=`yarn`
echo $output2

echo "正在编译"
output3=`yarn build`
echo $output3

echo "重启pm2"
# pm2 restart react.mobi
output4=`yarn pm2`
echo $output4

pm2 ls
echo "项目已更新"
