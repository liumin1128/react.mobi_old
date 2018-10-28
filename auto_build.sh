PRO_DIR="../react.mobi"

# echo "进入项目目录"
PATH_OLD=`pwd`
cd $PRO_DIR
PATH_NEW=`pwd`
echo "从 $PATH_OLD 切换到 $PATH_NEW"

# source ~/.nvm/nvm.sh
# nvm use 8.9.0
# echo "切换到8.9.0"
echo "Node 版本："
node -v
# echo "cd $PRO_DIR"

echo "正在从git同步代码"
git fetch --all
git reset --hard origin/master
git pull

# echo "安装依赖"
# yarn

yarn build

echo "重启pm2"
# pm2 restart api.react.mobi
yarn pm2
echo "finished----------"
