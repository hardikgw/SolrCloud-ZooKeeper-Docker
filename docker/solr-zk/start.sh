#!/bin/sh
cd /fusion/bin
./api restart
./connectors restart
./ui restart
tail -F /fusion/var/log/connectors/connector.log 
