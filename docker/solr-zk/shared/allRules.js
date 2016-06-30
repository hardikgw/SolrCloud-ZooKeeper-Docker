'use strict'

var rules = [
    {
        "id": "DeviceAvailability",
        "datasource": "catalogFeed",
        "condition": function (doc) {
            logger.info(">>>>>>>>>>>>>> In Condition >>>>>>>>>>>>>>" + doc.id);
            return (doc.displayName && (doc.displayName.toLowerCase().indexOf('iii mini - pebble blue') > -1));
        },
        "processor": function (doc) {
            var result = {};
            result['availability'] = 'Currently Available';
            return result;
        },
        "enabled": true
    }
];