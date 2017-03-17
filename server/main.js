import { Meteor } from 'meteor/meteor';

//  IMPORT COLLECTIONS API
import './../imports/api/users/server';
import './../imports/api/events/server';


//  IMPORT FUNCTIONS TO RUN AT STARTUP
import './../imports/startup/server';

Meteor.startup(() => {
  	loadUsers();
	loadEvents();
});
