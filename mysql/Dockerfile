FROM mysql:5.7.16 
ENV MYSQL_ROOT_PASSWORD=root

COPY sql/sql_conf /etc/mysql/conf.d
RUN sed -i 's/!includedir \/etc\/mysql\/conf\.d\//#!includedir \/etc\/mysql\/conf\.d\//' /etc/mysql/conf.d/sql_conf 
COPY sql/init.sql /docker-entrypoint-initdb.d/