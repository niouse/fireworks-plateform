import {eventsMongo} from "./../events.js";


Meteor.methods({
	getEventsKeys : function(){
		var eventKeys = [];
		for (var key in eventsMongo.findOne({})){
			eventsKeys.push(key)
		};
		return eventsKeys;
	}
})