@ECHO OFF
start http://127.0.0.1:3000
pm2 start bin/www --name=sap
PAUSE