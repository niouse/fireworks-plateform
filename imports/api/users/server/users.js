Meteor.methods({

	register: function(options) {
		/*let type = Meteor.user() ? Meteor.user().type : 'visitor';
		if(type !== 'admin'){
			throw new Error("access denied");
		}*/
		user = Accounts.createUser(options);
	}
});


Accounts.onCreateUser((options, user) => {
	user.firstName = options.firstName || "non défini";
	user.lastName = options.lastName || "non défini"
	user.type = options.type,
	user.photo = options.photo
	// Don't forget to return the new user object at the end!
	return user;
});
	


Meteor.publish("userData", function() {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId});
  } else {
    this.ready();
  }
});