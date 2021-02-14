#check read.me to how to log in
#cd to ecommere-ui
#sh run.sh
apt install npm
git checkout master
git pull origin master
npm install
sudo kill -9 `sudo lsof -t -i:8000`
nohup npm run serve -- --port 8000 &
