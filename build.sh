#!/bin/sh
docker build -t search/node-fusion:latest docker/fusion/node-fusion/.
docker build -t search/solrcloud-zookeeper-docker:latest docker/solr-zk/.
docker build -t search/fluentd-elastic-kibana-docker:latest docker/es-kb-fd/.
docker-compose -f docker/solr-zk/docker-compose.yml build
docker-compose -f docker/solr-zk/docker-compose.yml create
docker-compose -f docker/solr-zk/docker-compose.yml start elastic-kibana
docker-compose -f docker/solr-zk/docker-compose.yml up -d