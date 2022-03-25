FROM ubuntu:20.04

ARG DEBIAN_FRONTEND=noninteractive

ENV TZ=Asia/Shanghai

RUN buildDeps='software-properties-common libtool wget unzip' && \
    apt-get update && apt-get install -y python python3.8 gcc g++ mono-devel $buildDeps curl bash && \
    add-apt-repository ppa:openjdk-r/ppa && add-apt-repository ppa:longsleep/golang-backports && apt-get update && apt-get install -y golang-go openjdk-8-jdk && \
    add-apt-repository ppa:pypy/ppa && apt-get update && apt install -y pypy pypy3 && \
    add-apt-repository ppa:ondrej/php && apt-get update && apt-get install -y php7.3-cli && \
    curl -fsSL https://deb.nodesource.com/setup_14.x | bash && \
    apt-get install -y nodejs && \
    npm install jsvu -g && \
    jsvu --os=default v8@8.4.109 && \
    mv ~/.jsvu/v8-8.4.109 /usr/bin/jsv8 && \
    apt-get purge -y --auto-remove $buildDeps && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /judge/test_case /judge/run /judge/spj /judge/log

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY *.jar /judge/server/app.jar

COPY run.sh /judge/server/run.sh

COPY check_nacos.sh /judge/server/check_nacos.sh

COPY testlib.h /usr/include/testlib.h

ADD SandBox /judge/server/SandBox	
	
WORKDIR /judge/server

ENTRYPOINT ["bash", "./check_nacos.sh"]

EXPOSE 8088

EXPOSE 5050
