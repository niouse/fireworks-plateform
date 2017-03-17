Meteor.publish("userData", function() {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId});
  } else {
    this.ready();
  }
});

Meteor.publish("allUsers", function() {
	if (this.userId) {
	  if (Meteor.users.find({_id: this.userId}).fetch()[0].type === 'admin') {
		 //console.log(typeof(Meteor.users.find({_id: this.userId}).fetch()[0].type)) 
		return Meteor.users.find({});
	  } else {
		this.ready();
	  }
	}
});


Meteor.publish("userDetail", function(id) {
	console.log(Meteor.users.find({_id : id}).fetch())
	return Meteor.users.find({_id : id});
});


Meteor.publish("usersList", function() {
	return Meteor.users.find({}, {
	   fields: {
		   _id : 1,
		  "profile.lastName" : 1,
		  "profile.firstName" : 1,
		  "profile.photo" : 1,
		   "profile.location" : 1
	   }
		
	});
});