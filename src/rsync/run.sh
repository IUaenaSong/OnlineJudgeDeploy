#!/usr/bin/bash
if [ "$RSYNC_MODE" == "master" ]; then
	echo "$RSYNC_USER:$RSYNC_PASSWORD" > /oj/rsyncd/rsyncd_master.passwd
	chmod 600 /oj/rsyncd/rsyncd_master.passwd
	rsync --daemon --config=/oj/rsyncd/rsyncd.conf
else
	echo "$RSYNC_PASSWORD" > /oj/rsyncd/rsyncd_slave.passwd
	chmod 600 /oj/rsyncd/rsyncd_slave.passwd
	while true
	do
		rsync -avz --delete --progress --password-file=/oj/rsyncd/rsyncd_slave.passwd $RSYNC_USER@$RSYNC_MASTER_ADDR::testcase /oj/testcase >> /oj/log/rsync_slave.log
		sleep 100
	done
fi
