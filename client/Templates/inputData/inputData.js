Template.inputTemplate.events({
    'click #Search' () {
        $("button").prop('disabled', true);
        var queryValue = {
            "snowResortId": $("#resortID").val()
        }
        Meteor.call("findReports", queryValue, function(error, response) {
            if (response) {
                swal(response.code.toString(), response.message, "success")
                Session.set("queryValue", queryValue);
                $("button").prop('disabled', false);
            } else if (error) {

            }
        });
    },
    'click #Xml' () {
        $("button").prop('disabled', true);
        Meteor.call("getXmlnData", function(error, response) {
            if (response) {
                swal(response.code.toString(), response.message, "success");
                $("button").prop('disabled', false);
                Session.set("queryValue", {});
            } else if (error) {

            }
        });
    },
    'click #Json' () {
        $("button").prop('disabled', true);
        Meteor.call("getJsonData", function(error, response) {
            if (response) {
                swal(response.code.toString(), response.message, "success");
                $("button").prop('disabled', false);
                Session.set("queryValue", {});
            } else if (error) {

            }
        });
    }
});