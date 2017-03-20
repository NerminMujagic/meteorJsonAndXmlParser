import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


Template.dataGrid.helpers({
    reports() {
        var queryValue = Session.get("queryValue") || {};
        return Reports.find(queryValue).fetch();
    }
});

Template.dataGrid.events({
    'click tbody tr' () {
        Session.set("selectedReport", this);
        $("#dataModal").modal('show');
    }
});