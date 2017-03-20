Meteor.methods({

    'findReports': function(query) {
        try {
            var reports = Reports.find(query).fetch();
            if (typeof reports !== 'undefined' && reports.length > 0) {
                return { code: 200, message: "Successfully found data", data: reports };
            } else {
                return { code: 200, message: "No data found", data: {} };
            }
        } catch (exception) {
            throw new Meteor.Error();
        }
    },

    'deleteReports': function(data) {
        try {
            Reports.remove({ "_id": data });
            return { code: 200, message: "Successfully deleted", data: {} };
        } catch (exception) {

        }
    },
    'editReports': function(data) {
        try {
            var id = data._id;
            delete data._id;
            Reports.update(id, data);
            return { code: 200, message: "Successfully updated", data: {} };
        } catch (exception) {

        }
    },

});