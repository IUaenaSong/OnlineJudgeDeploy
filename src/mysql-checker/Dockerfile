FROM arey/mysql-client

COPY ./oj-update.sql /sql/

COPY ./update.sh /sql/


ENTRYPOINT ["/bin/sh", "/sql/update.sh"]
