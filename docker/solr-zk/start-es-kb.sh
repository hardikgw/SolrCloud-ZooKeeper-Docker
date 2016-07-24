#!/bin/sh
./es/bin/elasticsearch -Des.insecure.allow.root=true -d
nohup ./kb/bin/kibana &