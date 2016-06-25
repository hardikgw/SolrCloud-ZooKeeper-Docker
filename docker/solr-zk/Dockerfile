FROM ubuntu
MAINTAINER hardikgw@gmail.com
RUN\
	apt-get update &&\
	apt-get install -y vim curl wget nodejs &&\
	apt-get update &&\
	wget http://apache.claz.org/lucene/solr/6.1.0/solr-6.1.0.tgz &&\
	tar xzvf solr-6.1.0.tgz &&\
	wget http://apache.mesi.com.ar/zookeeper/stable/zookeeper-3.4.8.tar.gz &&\
	tar xzvf zookeeper-3.4.8.tar.gz &&\
	ln -s solr-6.1.0 solr &&\
	apt-get install -y software-properties-common &&\
	apt-get update &&\
 	apt-get install oracle-java6-installer
	
