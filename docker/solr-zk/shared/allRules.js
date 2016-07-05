var rules = [
    {
        "id": "att-col",
        "condition": function (doc) {
            return (true);
        },
        "datasource" : "att-col",
        "processor": function (doc) {
            var result = {};
            if (doc.doc.id && doc.doc.productURL == null && doc.doc.id.toString().toLowerCase().indexOf('source=')) {
                result['siteMapURL'] = doc.doc.id.toString().replace('tst.*com', 'www.att.com');
            }
            if (doc.doc.productURL && doc.doc.productURL.toString().toLowerCase().indexOf('source=')) {
                result['siteMapURL'] = doc.doc.productURL.toString().replace('tst.*com', 'www.att.com');
            }
            result['hello']='world';
        },
        "enabled": true
    },
    {
        "id": "nextstepscontent",
        "condition": function (doc) {
            return (doc.nextstepscontent);
        },
        "processor": function (doc) {
            var result = {};
            result['nextstepscontent'] = doc.doc.nextstepscontent.toString().replace('&#92;r&#92;n', '').replace('&#92;n', '').replace('\\\\', '');
        },
        "enabled": true
    },
    {
        "id": "additionalstepscontent",
        "condition": function (doc) {
            return (doc.additionalstepscontent);
        },
        "processor": function (doc) {
            var result = {};
            result['additionalstepscontent'] = doc.doc.additionalstepscontent.toString().replace('&#92;r&#92;n', '').replace('&#92;n', '').replace('\\\\', '');
        },
        "enabled": true
    },
    {
        "id": "firststepscontent",
        "condition": function (doc) {
            return (doc.firststepscontent);
        },
        "processor": function (doc) {
            var result = {};
            result['firststepscontent'] = doc.doc.firststepscontent.toString().replace('&#92;r&#92;n', '').replace('&#92;n', '').replace('\\\\', '');
        },
        "enabled": true
    },
    {
        "id": "deleteemptytagging",
        "datasource": "UpdateAnswerTags",
        "condition": function (doc) {
            return (true);
        },
        "processor": function (obj) {
            var result = {};
            if (obj.doc.answerTagMapping == null) {
                result['answerTagMapping'] = '';
            }
            if (obj.doc.answerTags == null) {
                result['answerTags'] = 'SomeTag';
            }
            if (obj.doc.showinfosteps == null) {
                result['showinfosteps'] = '';
            }
            if (obj.doc.cv == null) {
                result['cv'] = '';
            }
            if (obj.doc.answerStepMapping == null) {
                result['answerStepMapping'] = '';
            }
            if (obj.doc.stepNumber == null) {
                result['stepNumber'] = '';
            }
            if (obj.doc.answerCardId == null) {
                result['answerCardId'] = '';
            }
            if (obj.doc.serviceType == null) {
                result['serviceType'] = '';
            }
            if (obj.doc.authFlag == null) {
                result['authFlag'] = '';
            }
            if (obj.doc.displayCategory == null) {
                result['displayCategory'] = '';
            }
            if (obj.doc.answerdatasource) {
                if (obj.doc.answerdatasource.toString().toLowerCase().indexOf('esupport feed')) {
                    result['data_source_name'] = 'Esupport Feed';
                    result['data_source'] = 75;
                }
            }
            return result;
        },
        "enabled": true
    },
    {
        "id": "turnkey",
        "datasource": "turnkey",
        "condition": function (doc) {
            return (doc.id && doc.id.toLowerCase().indexOf('/att/cloudservices/'));
        },
        "processor": function (obj) {
            var result = {};
            var navTree = [];
            navTree.push('~All~');
            navTree.push('~Shop~');
            navTree.push('~Shop~All~');
            navTree.push('~Shop~Wireless~');
            navTree.push('~Shop~Wireless~All~');
            navTree.push('~Shop~Wireless~Ringtones & apps~');
            result['navigationTree'] = navTree;
            return result;
        },
        "enabled": true
    },
    {
        "id": "turnkeyGoPhoneMobileTablet",
        "datasource": "turnkey",
        "condition": function (doc) {
            return (doc.id && ( doc.id.toLowerCase().indexOf('/att/cloudservices/') || doc.id.toLowerCase().indexOf('www.att.com/att/gophone-tablet')));
        },
        "processor": function (doc) {
            var result = {};
            var navTree = [];
            navTree.push('~All~');
            navTree.push('~Shop~');
            navTree.push('~Shop~All~');
            navTree.push('~Shop~Wireless~');
            navTree.push('~Shop~Wireless~All~');
            navTree.push('~Shop~Wireless~Service~');
            result['navigationTree'] = navTree;
            return result;
        },
        "enabled": true
    },
    {
        "id": "turnkeyAttMicrocell",
        "datasource": "turnkey",
        "condition": function (doc) {
            return (doc.id && ( doc.id.toLowerCase().indexOf('www.att.com/att/microcell')));
        },
        "processor": function (doc) {
            var result = {};
            var navTree = [];
            navTree.push('~All~');
            navTree.push('~Shop~');
            navTree.push('~Shop~All~');
            navTree.push('~Shop~Wireless~');
            navTree.push('~Shop~Wireless~All~');
            result['navigationTree'] = navTree;
            return result;
        },
        "enabled": true
    },
    {
        "id": "navTreeNewDealer",
        "datasource": "turnkey",
        "condition": function (doc) {
            return (doc.id && doc.id.toLowerCase().indexOf('www.att.com/att/newdealer/') );
        },
        "processor": function (doc) {
            var result = {};
            result['navigationTree'] = '~All~';
            result['taxoservice'] = 'All';
            result['thumbImage'] = 'icon_serv.png';
            result['body'] = '';
            return result;
        },
        "enabled": true
    },
    {
        "id": "navTreeLegal",
        "datasource": "legal",
        "condition": function (doc) {
            return (doc.id && doc.id.toLowerCase().indexOf('/legal/'));
        },
        "processor": function (doc) {
            var result = {};
            result['navigationTree'] = '~All~';
            result['contentType'] = 'Legal';
            result['body'] = '';
            return result;
        },
        "enabled": true
    },
    {
        "id": "navigationTreeForum",
        "datasource": "forum",
        "condition": function (doc) {
            return (true);
        },
        "processor": function (doc) {
            var result = {};
            result['customerType'] = doc.navigationTree;
            return result;
        },
        "enabled": true
    },
    {
        "id": "GVPVideoTutorial",
        "datasource": "GVP Video Feed",
        "condition": function (doc) {
            return (doc.showInSearch && doc.showInSearch.toString() == 'true' && doc.type && doc.type.toString() == 'video' && doc.state && doc.state.toString().indexOf('active') && doc.language && doc.language.toString().indexOf('en'));
        },
        "processor": function (doc) {
            var result = {};
            if (obj.doc.application && obj.doc.application.toString().indexOf('live')) {
                result['navigationTree'] = '~All~';
                result['contentType'] = 'Videos';
                result['productType'] = 'gvp';
            }
            if (obj.doc.supportDeviceMake && obj.doc.application && obj.doc.application.toString().indexOf('live')) {
                result['contentType'] = 'Videos';
                var navTree = [];
                navTree.push('~All~');
                navTree.push('~Support~');
                navTree.push('~Support~All~');
                navTree.push('~Support~Wireless@#820~');
                result['navigationTree'] = navTree;
                result['customerType'] = obj.doc.navigationTree;
                result['productType'] = 'gvp';
            }
            return result;
        },
        "enabled": true
    },
    {
        "id": "DeviceAvailability",
        "datasource": "catalogFeed",
        "condition": function (doc) {
            return (doc.displayName && doc.displayName.toLowerCase().indexOf('iii mini - pebble blue'));
        },
        "processor": function (doc) {
            var result = {};
            result['availability'] = 'Currently Available';
            return result;
        },
        "enabled": true
    },
    {
        "id": "priceCatalog",
        "datasource": "catalogFeed",
        "condition": function (doc) {
            return (doc.docType && doc.docType.toLowerCase().indexOf('packages') && doc.price === 0.0);
        },
        "processor": function (doc) {
            var result = {};
            result['price'] = null;
            return result;
        },
        "enabled": true
    }
];
