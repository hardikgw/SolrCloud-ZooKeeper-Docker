#!/bin/sh
./es/bin/elasticsearch -Des.insecure.allow.root=true -d
./kb/bin/kibana
