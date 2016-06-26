FROM ubuntu
MAINTAINER hardikgw@gmail.com
ENV\
	SOLR_VER=6.1.0 \
	ZK_VER=3.4.8
RUN\
	apt-get update &&\
	apt-get install -y vim curl wget nodejs default-jdk lsof &&\
	apt-get update &&\
	wget http://apache.claz.org/lucene/solr/$SOLR_VER/solr-$SOLR_VER.tgz &&\
	tar xzvf solr-$SOLR_VER.tgz &&\
	wget http://apache.spinellicreations.com/zookeeper/zookeeper-$ZK_VER/zookeeper-$ZK_VER.tar.gz &&\
	tar xzvf zookeeper-$ZK_VER.tar.gz &&\
	ln -s solr-$SOLR_VER solr &&\
	ln -s zookeeper-$ZK_VER zk &&\
	mkdir solr-data &&\
	mkdir zk-data &&\
	echo "$$ZKID" >> /zk-data/myid &&\
        touch /zk/conf/zoo.cfg &&\
	echo "tickTime=2000" >> /zk/conf/zoo.cfg &&\
	echo "dataDir=/zk-data" >> /zk/conf/zoo.cfg &&\
	echo "clientPort=2181" >> /zk/conf/zoo.cfg &&\
	echo "initLimit=5" >> /zk/conf/zoo.cfg &&\
	echo "syncLimit=2" >> /zk/conf/zoo.cfg &&\
	echo "server.1=zoo1:2888:3888" >> /zk/conf/zoo.cfg &&\
      	echo "server.1=zoo2:2888:3888" >> /zk/conf/zoo.cfg &&\
      	echo "server.1=zoo3:2888:3888" >> /zk/conf/zoo.cfg &&\
	chmod 755 /zk/bin/*.sh &&\
	chmod 755 /solr/bin/solr
ENTRYPOINT\
	./zk/bin/zkServer.sh start &&\
      	./solr/bin/solr -cloud -z solr-zk-1:2181,solr-zk-2:2181,solr-zk-3:2181 -s /solr-data
