#!/bin/sh
cd /fusion/bin
./api start
./connectors start
./ui start
tail -F /fusion/var/log/connectors/connector.log 
