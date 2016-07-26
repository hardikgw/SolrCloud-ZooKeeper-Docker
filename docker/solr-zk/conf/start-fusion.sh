#!/bin/sh
cd /fusion/bin
./connectors restart
./api restart
./ui restart
./etc/init.d/td-agent restart
tail -F /fusion/var/log/connectors/connectors.log 