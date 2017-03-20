Meteor.methods({

    'getJsonData': function() {
        try {
            Reports.remove({});
            jsonData = JSON.parse(Assets.getText("snowdata.json"));
            for (var key in jsonData) {
                var databeseObject = jsonData[key];
                databeseObject.keyObject = key;
                databeseObject.snowResortId = databeseObject.snowResortId.toString();
                if (!Reports.findOne({ "keyObject": key })) {
                    Reports.insert(jsonData[key]);
                }
            }
            return { code: 200, message: "Successfully inported data" };
        } catch (exception) {

        }
    },

    'getXmlnData': function() {
        try {
            Reports.remove({});
            var xml = Assets.getText("snowdata.xml");
            xml2js.parseString(xml, function(err, result) {
                _.each(result.data.dataset, function(report) {
                    var databeseObject = {};
                    for (var key in report) {
                        databeseObject[key] = report[key][0];
                    }
                    Reports.insert(databeseObject);
                });
            });
            return { code: 200, message: "Successfully inported data" };
        } catch (exception) {

        }
    }

});