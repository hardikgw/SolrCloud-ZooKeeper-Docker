# this bash script file is included by common.sh

API_PORT=8765
API_STOP_PORT=7765
API_STOP_KEY=fusion
API_JAVA_OPTIONS=(-Xmx1g -XX:MaxPermSize=256m -Dapple.awt.UIElement=true)

CONNECTORS_PORT=8984
CONNECTORS_STOP_PORT=7984
CONNECTORS_STOP_KEY=fusion
CONNECTORS_JAVA_OPTIONS=(-Xmx2g -XX:MaxPermSize=256m -Dapple.awt.UIElement=true)

SOLR_PORT=8983
SOLR_STOP_PORT=7983
SOLR_STOP_KEY=fusion
SOLR_JAVA_OPTIONS=(-Xmx2g -Dapple.awt.UIElement=true)

UI_PORT=8764
UI_STOP_PORT=7764
UI_STOP_KEY=fusion
UI_JAVA_OPTIONS=(-Xmx512m -XX:MaxPermSize=256m -Dapple.awt.UIElement=true)

SPARK_MASTER_PORT=8766
SPARK_MASTER_UI_PORT=8767
SPARK_MASTER_JAVA_OPTIONS=(-Xmx512m -XX:MaxPermSize=128m -Dapple.awt.UIElement=true)

SPARK_JOB_SERVER_PORT=8768

SPARK_WORKER_PORT=8769
SPARK_WORKER_UI_PORT=8770
SPARK_WORKER_JAVA_OPTIONS=(-Xmx1g -XX:MaxPermSize=256m -Dapple.awt.UIElement=true)

# the port the bundled ZooKeeper listens on. If you change this, also change the
# "clientPort" setting in the conf/zookeeper/zoo.cfg
#ZOOKEEPER_PORT=9983

# The FUSION_ZK is the address of the ZooKeeper cluster where Fusion keeps
# track of its various services and stores its own configuration.
# The FUSION_SOLR_ZK is used to locate the Solr cluster where Fusion
# creates its internal collections (logs, metrics etc), and to change
# solr configuration if expliticly asked via our APIs.
FUSION_ZK=zoo1:2181,zoo2:2181,zoo3:2181
FUSION_SOLR_ZK=zoo1:2181,zoo2:2181,zoo3:2181

# The origins that are allowed to serve resources
FUSION_CORS_ALLOW_ORIGIN=\.\*

# Enable verbose GC logging
GC_LOG_OPTS=(-verbose:gc \
	-XX:+PrintHeapAtGC \
	-XX:+PrintGCDetails \
	-XX:+PrintGCDateStamps \
	-XX:+PrintGCTimeStamps \
	-XX:+PrintTenuringDistribution \
	-XX:+PrintGCApplicationStoppedTime \
	-XX:+UseGCLogFileRotation \
	-XX:NumberOfGCLogFiles=20 \
	-XX:GCLogFileSize=10M)

# These GC settings have shown to work well for a number of common Solr workloads
GC_TUNE=(-XX:NewRatio=3 \
	-XX:SurvivorRatio=4 \
	-XX:TargetSurvivorRatio=90 \
	-XX:MaxTenuringThreshold=8 \
	-XX:+UseConcMarkSweepGC \
	-XX:+UseParNewGC \
	-XX:ConcGCThreads=4 -XX:ParallelGCThreads=4 \
	-XX:+CMSScavengeBeforeRemark \
	-XX:PretenureSizeThreshold=64m \
	-XX:+UseCMSInitiatingOccupancyOnly \
	-XX:CMSInitiatingOccupancyFraction=50 \
	-XX:CMSMaxAbortablePrecleanTime=6000 \
	-XX:+CMSParallelRemarkEnabled \
	-XX:+ParallelRefProcEnabled)

