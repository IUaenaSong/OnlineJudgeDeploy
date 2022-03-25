FROM ubuntu:20.04

RUN apt-get update && apt-get -y install rsync

RUN mkdir -p /oj/rsyncd

COPY run.sh /oj/rsyncd/run.sh

COPY rsyncd.conf /oj/rsyncd/rsyncd.conf

CMD /bin/bash /oj/rsyncd/run.sh && tail -f /dev/null