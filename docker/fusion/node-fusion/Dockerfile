FROM ubuntu
RUN\ 
	apt-get update &&\
	apt-get install -y wget vim nodejs tar npm default-jdk &&\
	apt-get update &&\
	npm install -g gulp &&\
	wget https://download.lucidworks.com/fusion-2.4.2.tar.gz &&\
	tar xzvf fusion-2.4.2.tar.gz
EXPOSE 3000 8764 8765 8983 8984 8766 8769