# Solr Cloud with ZooKeeper Ensamble
This repo contains following

1. Dockerfile with Solr 6.1 and Zookeeper 3.4.6
2. docker-compose.yml with will use build from above Dockerfile and create three images and run in separate container

Note: docker-compose also creates separate network. Each container created in step 2 will have hosts entry for each other since the container uses static IP address. To connect to Solr or Zookeeper from localhost you will need to look up the mapped port using "docker inspect"

## Steps

1. git clone https://github.com/hardikgw/SolrCloud-ZooKeeper-Docker.git
2. cd SolrCloud-ZooKeeper-Docker/docker/solr-zk/
3. docker-compose build
4. docker-compose up -d
