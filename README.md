# Solr Cloud with ZooKeeper Ensamble
This repo contains following

1. Dockerfile with Solr 6.1 and Zookeeper 3.4.6
2. docker-compose.yml with will use build from above Dockerfile and create three images and run in separate container
3. build scrip to build docker images, containers and start services

Note: docker-compose also creates separate network. Each container created in step 2 will have hosts entry for each other since the container uses static IP address.

## Steps

1. git clone 
2. cd SolrCloud-ZooKeeper-Docker
3. ./build.sh


List of URLs:

Kibana: http://localhost:5601/app/kibana
Fusion: http://localhost:8764/

SolrCloud - "att-search" cluster

http://localhost:32961/solr/#/
http://localhost:32962/solr/#/
http://localhost:32963/solr/#/

SolrCloud - "default" cluster for fusion

http://localhost:32964/solr/#/
http://localhost:32965/solr/#/


To inspect open ports and services:
docker-compose -f docker/solr-zk/docker-compose.yml ps

-- build.sh --
#!/bin/sh
1. build fusion + node image: docker build -t search/node-fusion:latest docker/fusion/node-fusion/.
2. build solr + zookeeper image: docker build -t search/solrcloud-zookeeper-docker:latest docker/solr-zk/.
3. build elasticsearch + kibana + fluentdb image: docker build -t search/fluentd-elastic-kibana-docker:latest docker/es-kb-fd/.
4. create service containers: docker-compose -f docker/solr-zk/docker-compose.yml create
5. start elasticsearch + kibana service: docker-compose -f docker/solr-zk/docker-compose.yml start elastic-kibana
6. start all other services: docker-compose -f docker/solr-zk/docker-compose.yml up -d

Note: 

1. all steps in build.sh can be done individually (recommended) since steps 1-3 can take long time to download binaries
2. although steps 4-5 can be replaced with "up -d", they are separated because elastic-kibana service is used as logging service for all others