import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


Template.dataModal.helpers({
    report() {
        return Session.get("selectedReport");
    }
});

Template.dataModal.events({
    'click #save' () {
        var report = Template.dataModal.__helpers.get('report').call();

        report.resortName = $("#resortName").val();
        report.snowResortId = $("#snowResortId").val();
        report.snowReportResortOpen = $("#snowReportResortOpen").val();
        report.snowReportLastSnowDate = $("#snowReportLastSnowDate").val();
        report.snowReportLastSnowCm = $("#snowReportLastSnowCm").val();
        report.snowReportLiftsTotalNrOpen = $("#snowReportLiftsTotalNrOpen").val();
        report.snowReportSlopesTotalNrOpen = $("#snowReportSlopesTotalNrOpen").val();
        report.snowReportSlopeValleyOpen = $("#snowReportSlopeValleyOpen").val();
        report.snowReportSlopesCondition = $("#snowReportSlopesCondition").val();
        report.snowReportDate = $("#snowReportDate").val();
        report.snowReportSnowDepthBaseCm = $("#snowReportSnowDepthBaseCm").val();
        report.snowReportSnowDepthTopCm = $("#snowReportSnowDepthTopCm").val();

        Meteor.call("editReports", report, function(error, response) {
            if (response) {
                swal(response.code.toString(), response.message, "success");
                Session.set("selectedReport", undefined);
            } else if (error) {

            }
        });
    },
    'click #delete' () {
        var report = Template.dataModal.__helpers.get('report').call();
        Meteor.call("deleteReports", report._id, function(error, response) {
            if (response) {
                swal(response.code.toString(), response.message, "success")
                Session.set("selectedReport", undefined);
            } else if (error) {

            }
        });
    }
});