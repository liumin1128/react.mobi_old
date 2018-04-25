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
pwd
cd $PRO_DIR
pwd
echo "从 $PATH_OLD 切换到 $PATH_NEW"

echo "正在从git同步代码"
# output1=`git fetch --all && git reset --hard origin/master && git pull`
# echo $output1
git fetch --all
git reset --hard origin/v3
git pull

echo "正在下载依赖"
yarn

echo "正在编译"
yarn build

echo "重启pm2"
yarn pm2

pm2 ls
echo "项目已更新！"
