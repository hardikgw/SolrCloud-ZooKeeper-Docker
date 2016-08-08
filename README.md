# Solr Cloud with ZooKeeper Ensamble
This repo contains following

1. Dockerfile with Solr 6.1 and Zookeeper 3.4.6
2. docker-compose.yml with will use build from above Dockerfile and create three images and run in separate container
3. build scrip to build docker images, containers and start services

Note: docker-compose also creates separate network. Each container created in step 2 will have hosts entry for each other since the container uses static IP address.

## Steps

1. `git clone`
2. `cd SolrCloud-ZooKeeper-Docker`
3. `./build.sh`


###### List of URLs:
- Kibana: http://localhost:5601/app/kibana
- Fusion: http://localhost:8764/

###### SolrCloud - "att-search" cluster
- http://localhost:32961/solr/#/
- http://localhost:32962/solr/#/
- http://localhost:32963/solr/#/

###### SolrCloud - "default" cluster for fusion
- http://localhost:32964/solr/#/
- http://localhost:32965/solr/#/


To inspect open ports and services:
docker-compose -f docker/solr-zk/docker-compose.yml ps

#### build.sh
1. build fusion + node image: docker build -t search/node-fusion:latest docker/fusion/node-fusion/.
2. build solr + zookeeper image: docker build -t search/solrcloud-zookeeper-docker:latest docker/solr-zk/.
3. build elasticsearch + kibana + fluentdb image: docker build -t search/fluentd-elastic-kibana-docker:latest docker/es-kb-fd/.
4. create service containers: docker-compose -f docker/solr-zk/docker-compose.yml create
5. start elasticsearch + kibana service: docker-compose -f docker/solr-zk/docker-compose.yml start elastic-kibana
6. start all other services: docker-compose -f docker/solr-zk/docker-compose.yml up -d

#### List of images

##### Main Images
> search/solrcloud-zookeeper-docker     : Solr + ZooKeeper
> search/node-fusion                    : NodeJS + Fusion
> search/fluentd-elastic-kibana-docker  : ElasticSearch + Kibana + FluentD Collector

##### Extensions of main images with configurations
> solrzk_zoo1             : Extension of search/solrcloud-zookeeper-docker                
> solrzk_zoo2             : Extension of search/solrcloud-zookeeper-docker                
> solrzk_zoo3             : Extension of search/solrcloud-zookeeper-docker                
> solrzk_zoo4             : Extension of search/solrcloud-zookeeper-docker                
> solrzk_zoo5             : Extension of search/solrcloud-zookeeper-docker                
> solrzk_node-fusion      : Extension of search/node-fusion                
> solrzk_elastic-kibana   : Extension of search/fluentd-elastic-kibana-docker


#### Stop containers:
docker-compose -f docker/solr-zk/docker-compose.yml stop

#### Start containers
docker-compose -f docker/solr-zk/docker-compose.yml start elastic-kibana
docker-compose -f docker/solr-zk/docker-compose.yml up -d

Note: Elastic-Kibana is started before othe rcontainers since it is log collector

#### Cleanup

##### Stop containers
`docker-compose -f docker/solr-zk/docker-compose.yml stop`

##### Remove containers
`docker-compose -f docker/solr-zk/docker-compose.yml rm`

##### Remove extension images
`docker rm $(docker images -q solrzk_)`

##### Reove all images (Warning: This command will delete all images in your pc)
`docker rm $(doccker images -q)`
