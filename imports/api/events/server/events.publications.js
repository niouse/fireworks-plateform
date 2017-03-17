import {eventsMongo} from "./../events.js";


Meteor.publish("events", function() {
	return  eventsMongo.find({});
});

Meteor.publish("eventsList", function() {
	return  eventsMongo.find({}, {fields : {
		name : 1,
		status : 1,
		dateShow : 1,
		country : 1
	}});
});

Meteor.publish("oneEvent", function(eventId) {
	return  eventsMongo.find({_id : eventId});
});