#!/bin/sh
cd /fusion/bin
./connectors restart
./api restart
./ui restart
tail -F /fusion/var/log/connectors/connectors.log 