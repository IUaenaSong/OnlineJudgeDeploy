FROM java:8

COPY *.jar /app.jar

COPY check_nacos.sh /check_nacos.sh

COPY run.sh /run.sh

ENV TZ=Asia/Shanghai

ENV BACKEND_SERVER_PORT=6688

VOLUME ["/oj/file","/oj/testcase"]

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

CMD ["bash","/check_nacos.sh"]

EXPOSE $BACKEND_SERVER_PORT
